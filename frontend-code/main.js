console.log("MAIN JS LOADED");

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click' , async (e) => {
    e.preventDefault();
    console.log("UPLOAD CLICKED");

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append('image', file); 
    try {
        const res = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });
        const data = await res.text();
        
        document.getElementById('response').innerHTML = data;
    } catch (err) {
        console.log("error is" + err);
    }
    return;
})
