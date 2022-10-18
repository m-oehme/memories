OC.L10N.register(
    "memories",
    {
    "Memories" : "回憶",
    "Yet another photo management app" : "又一個照片管理應用程式",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🤖 AI Tagging**: Group photos by people and objects using AI, powered by the [recognize](https://github.com/nextcloud/recognize) app.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# 回憶\n\n* **📸 照片與影片時間軸**：按解析自 Exif 資料的拍攝日期對照片進行排序。\n* **🤔 快速回顧**：立刻跳至時間軸的任何位置。\n* **🖼️ 資料夾**：使用相似的高效率時間軸瀏覽您的資料夾與共享資料夾。\n* **🤖 AI 標記**：將人們與物體使用 AI 歸類，威力本源 [recognize](https://github.com/nextcloud/recognize) 應用程式。\n* **🎦 投影片**：輕鬆檢視來自您時間軸的照片與資料夾。\n* **📱 行動裝置支援**：透過網路應用程式在任何形狀與大小的裝置上重溫您的回憶。\n* **✏️ 編輯詮釋資料**：在行動裝置上快速且輕鬆地編輯 Exif 日期。\n* **📦 封存**：將您不想在時間軸上看到的照片儲存在單獨的資料夾。\n* **⚡️ 快速**：回憶超快，就這樣。\n\n## 🚀 安裝\n\n1. 從 Nextcloud 應用程式商店安裝應用程式\n1. ⚒️ 安裝 `exiftool` （請見下方）。\n1. 執行 `php ./occ memories:index` 來產生既有照片的詮釋資料索引。\n1. 在 Nextcloud 中開啟 📷 回憶應用程式，並設定包含您照片的目錄。來自此目錄的照片將會顯示在時間軸中，包含任何子目錄中的照片。\n1. 強烈建議安裝[預覽產生器](https://github.com/rullzer/previewgenerator)來預先產生縮圖。\n\n## 🔨 安裝依賴關係\n實際步驟取決於您的 Nextcloud 平台。若您使用 Docker 建立您的 Nextcloud 站台，您可以透過使用自訂的 Docker 映像檔來安裝 Exiftool。\n- **Ubuntu/Debian**：`sudo apt install libimage-exiftool-perl`\n- **Fedora**：`sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**：`sudo pacman -S perl-image-exiftool`\n- **Alpine**：`apk add --no-cache exiftool`\n- **MacOS**：`brew install exiftool`\n- **FreeBSD**：`sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "時間軸",
    "Folders" : "資料夾",
    "Favorites" : "最愛",
    "Videos" : "影片",
    "People" : "人物",
    "Archive" : "壓縮檔",
    "On this day" : "在這天",
    "Tags" : "標籤",
    "Settings" : "設定",
    "Cancel" : "取消",
    "Delete" : "刪除",
    "Download" : "下載",
    "Favorite" : "收藏",
    "Unarchive" : "取消封存",
    "Edit Date/Time" : "編輯日期／時間",
    "View in folder" : "在資料夾中檢視",
    "Remove from person" : "從人中移除",
    "You are about to download a large number of files. Are you sure?" : "您將要下載大量檔案。您確定嗎？",
    "You are about to delete a large number of files. Are you sure?" : "您將要刪除大量檔案。您確定嗎？",
    "You are about to touch a large number of files. Are you sure?" : "您將要處理大量檔案。您確定嗎？",
    "_{n} selected_::_{n} selected_" : ["已選取 {n} 個"],
    "Timeline Path" : "時間軸路徑",
    "Show hidden folders" : "顯示隱藏的資料夾",
    "Update" : "更新",
    "Error updating settings" : "更新設定時發生錯誤",
    "Your Timeline" : "您的時間軸",
    "Failed to load some photos" : "載入部份照片時失敗",
    "Update Exif" : "更新 Exif",
    "Newest" : "最新",
    "Year" : "年",
    "Month" : "月",
    "Day" : "日",
    "Time" : "時間",
    "Hour" : "小時",
    "Minute" : "分鐘",
    "Oldest" : "最舊",
    "Processing … {n}/{m}" : "正在處理…… {n}/{m}",
    "This feature modifies files in your storage to update Exif data." : "此功能會修改您儲存空間中的檔案以更新 Exif 資料。",
    "Exercise caution and make sure you have backups." : "小心執行並確認您有備份。",
    "Loading data … {n}/{m}" : "正在載入資料…… {n}/{m}",
    "Remove person" : "移除人",
    "Are you sure you want to remove {name}" : "您真的想要移除 {name} 嗎",
    "Failed to delete {name}." : "刪除 {name} 失敗。",
    "Rename person" : "重新命名人",
    "Name" : "名稱",
    "Failed to rename {oldName} to {name}." : "將 {oldName} 重新命名為 {name} 失敗。",
    "Merge {name} with person" : "將  {name} 與人合併",
    "Loading …" : "正在載入……",
    "Are you sure you want to merge {name} with {newName}?" : "您真的想要將 {name} 與 {newName} 合併嗎？",
    "Too many failures, aborting" : "失敗次數過多，中止",
    "Error while moving {basename}" : "移動 {basename} 時發生錯誤",
    "Failed to move {name}." : "移動 {name} 失敗。",
    "Back" : "返回",
    "Merge with different person" : "與其他人合併",
    "Failed to delete files." : "刪除檔案失敗",
    "Failed to delete {fileName}." : "刪除 {fileName} 失敗。",
    "General Failure" : "一般失敗",
    "Error: {msg}" : "錯誤：{msg}",
    "Failed to favorite {fileName}." : "將 {fileName} 加入最愛失敗。",
    "Failed to favorite files." : "加入最愛檔案失敗。",
    "Cannot find this photo anymore!" : "再也找不到這張照片了！"
},
"nplurals=1; plural=0;");
