import url from 'url'



let x = new URL("https://chatgpt.com/c/690b1d11-2814-832c-bd8e-f7733a670ff1");

console.log(x.host);

console.log(x.searchParams);


let flipkarturl = new URL(  "https://www.flipkart.com/apple-iphone-16-plus-ultramarine-128-gb/p/itm3a32a91957d41?pid=MOBH4DQFKZDYZNWX&param=0821&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTYwLDQ5OSoiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJBcHBsZSBpUGhvbmUgMTYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJNT0JINERRRktaRFlaTldYIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D"  )


 console.log(  flipkarturl.host  );

 let res = flipkarturl.searchParams;

 console.log(res.get("pid"));
