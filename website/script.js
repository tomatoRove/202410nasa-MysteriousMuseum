// ボタンがクリックされたときにギャラリーに画像を追加する
document.querySelectorAll('.add-to-gallery').forEach(button => {
    button.addEventListener('click', () => {
        const imageItem = button.parentElement;
        const imageSrc = imageItem.querySelector('img').src;
        const imageTitle = imageItem.querySelector('.image-title').value || "無題";

        // ギャラリーに追加するためのHTMLを生成
        const gallery = document.getElementById('gallery');
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;

        const titleElement = document.createElement('div');
        titleElement.classList.add('gallery-title');
        titleElement.textContent = imageTitle;

        // ギャラリーアイテムに画像とタイトルを追加
        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(titleElement);

        // ギャラリーに新しいアイテムを追加
        gallery.appendChild(galleryItem);
    });
});
