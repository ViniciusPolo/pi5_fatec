import {storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
    saveImage: async (imagem, imagemNome) => {
        if(!imagem) return;
        
        const downloadImagem=await fetch(imagem)
        const blobImagem = await downloadImagem.blob()
        
        const imagemRef = ref(storage, imagemNome)
        
        try {
            await uploadBytes(imagemRef, blobImagem);
            const url = await getDownloadURL(imagemRef);
            return url;
            console.log("entrou function salvar imagem", imagem, imagemNome, "-------   ", url)
        }
        catch(error) {
            console.log(error)
            return null;
        }
    }
}
