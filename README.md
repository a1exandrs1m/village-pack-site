# Village Pack

Лендинг модпака **Village Pack** для Minecraft Forge 1.21.11 — найм рабочих,
экономика без крафта, оборона от рейдов и обучение новичков в одном мире.

Живая страница: https://a1exandrs1m.github.io/village-pack-site/

## Структура

- `index.html` — страница
- `css/style.css` — стили и анимации
- `js/script.js` — плавное появление блоков при скролле
- `assets/hero.png` — баннер
- `assets/VillagePack-Setup.exe` — установщик модов сборки (Inno Setup),
  копирует моды в `%APPDATA%\.minecraft\mods`

## Обновление установщика

Собрать новую версию `VillagePack-Setup.exe` (см. `D:\Cloude project\installer`),
скопировать в `assets/`, закоммитить и запушить.
