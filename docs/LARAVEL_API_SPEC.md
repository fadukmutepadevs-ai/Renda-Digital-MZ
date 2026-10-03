# Renda Digital MZ — Especificação de Integração Laravel + MySQL

Este documento descreve a arquitetura para conectar o frontend do **Renda Digital MZ** a um backend **Laravel 11+** com banco de dados **MySQL** e painel administrativo (como Filament PHP ou Laravel Nova).

---

## 1. Estrutura do Banco de Dados (Migrations MySQL)

### Tabela `articles`
```sql
CREATE TABLE `articles` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `category` ENUM('renda-extra', 'trabalho-online', 'ferramentas', 'negocios-digitais', 'dicas', 'oportunidades', 'guias') NOT NULL,
  `summary` TEXT NOT NULL,
  `content` JSON NOT NULL,
  `reading_time` VARCHAR(50) NOT NULL DEFAULT '5 min',
  `risk_level` ENUM('Baixo', 'Médio', 'Alto', 'Crítico') NOT NULL DEFAULT 'Baixo',
  `initial_cost` VARCHAR(100) NOT NULL DEFAULT '0 MZN',
  `estimated_return` VARCHAR(150) NULL,
  `requirements` JSON NULL,
  `tags` JSON NULL,
  `key_takeaways` JSON NULL,
  `is_featured` BOOLEAN NOT NULL DEFAULT 0,
  `status` ENUM('rascunho', 'publicado') NOT NULL DEFAULT 'publicado',
  `author` VARCHAR(100) NOT NULL DEFAULT 'Equipa Renda Digital MZ',
  `published_at` TIMESTAMP NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
```

### Tabela `tools`
```sql
CREATE TABLE `tools` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `is_free` BOOLEAN NOT NULL DEFAULT 1,
  `price_note` VARCHAR(150) NULL,
  `platform` VARCHAR(100) NOT NULL DEFAULT 'Multiplataforma',
  `data_usage_rating` VARCHAR(50) NOT NULL DEFAULT 'Mínimo (Leve)',
  `url` VARCHAR(255) NOT NULL,
  `pros` JSON NULL,
  `best_for` VARCHAR(255) NULL,
  `is_active` BOOLEAN NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
```

### Tabela `opportunities`
```sql
CREATE TABLE `opportunities` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `type` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `requirements` JSON NULL,
  `payment_methods` JSON NULL,
  `url` VARCHAR(255) NOT NULL,
  `verified` BOOLEAN NOT NULL DEFAULT 1,
  `difficulty` ENUM('Iniciante', 'Intermediário', 'Avançado') NOT NULL DEFAULT 'Iniciante',
  `tips` TEXT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
```

---

## 2. Rotas de API (`routes/api.php`)

```php
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\ToolController;
use App\Http\Controllers\Api\OpportunityController;
use App\Http\Controllers\Api\GuideController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Endpoints Públicos (Leitura Rápida com Cache)
    Route::get('/articles', [ArticleController::class, 'index']);
    Route::get('/articles/{slug}', [ArticleController::class, 'show']);

    Route::get('/tools', [ToolController::class, 'index']);
    Route::get('/opportunities', [OpportunityController::class, 'index']);
    Route::get('/guides', [GuideController::class, 'index']);
    Route::get('/guides/{slug}', [GuideController::class, 'show']);

    // Endpoints Protegidos por Token (Sanctum) para Painel Administrativo
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/articles', [ArticleController::class, 'store']);
        Route::put('/articles/{id}', [ArticleController::class, 'update']);
        Route::delete('/articles/{id}', [ArticleController::class, 'destroy']);

        Route::post('/tools', [ToolController::class, 'store']);
        Route::put('/tools/{id}', [ToolController::class, 'update']);
        Route::delete('/tools/{id}', [ToolController::class, 'destroy']);

        Route::post('/opportunities', [OpportunityController::class, 'store']);
        Route::put('/opportunities/{id}', [OpportunityController::class, 'update']);
        Route::delete('/opportunities/{id}', [OpportunityController::class, 'destroy']);
    });
});
```

---

## 3. Exemplo de Controller Laravel (`ArticleController.php`)

```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $category = $request->query('category');
        $q = $request->query('q');

        $cacheKey = "articles_cat_{$category}_q_{$q}";

        // Cache de 30 minutos em Redis ou arquivo para garantir velocidade extrema
        return Cache::remember($cacheKey, 1800, function () use ($category, $q) {
            $query = Article::where('status', 'publicado')->orderBy('published_at', 'desc');

            if ($category && $category !== 'todos') {
                $query->where('category', $category);
            }

            if ($q) {
                $query->where(function ($sub) use ($q) {
                    $sub->where('title', 'like', "%{$q}%")
                        ->orWhere('summary', 'like', "%{$q}%");
                });
            }

            return response()->json([
                'status' => 'success',
                'data' => $query->get()
            ]);
        });
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)->where('status', 'publicado')->firstOrFail();
        return response()->json(['status' => 'success', 'data' => $article]);
    }
}
```

---

## 4. Como Ativar a Conexão no Frontend

1. Adicione a URL do Laravel no arquivo `.env` do frontend:
   ```env
   VITE_API_BASE_URL=https://api.rendadigitalmz.com
   ```
2. No painel de configurações do app, ative o switch **"Conectar com API Laravel"**.
3. O frontend tentará sincronizar e salvará uma cópia no `localStorage` do celular do usuário para continuar carregando instantaneamente em conexões 2G/3G!
