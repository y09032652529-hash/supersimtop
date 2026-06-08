const baseLinks = {
    up1: "https://pay.asegupag.com/checkout/699b8862-508d-48d2-9d56-440e404578cf", // Verifique
    up2: "https://pay.asegupag.com/checkout/eff9b529-f219-4bec-b43b-f4ee15468ef9", // Prossiga
    up3: "https://pay.asegupag.com/checkout/11ccbf94-e977-4728-9ad4-228b1a5e79c0", // Cadastro
    up4: "https://pay.asegupag.com/checkout/c517e766-f112-4775-87af-177295c8b3af", // Pendente
    up5: "https://pay.asegupag.com/checkout/981fab70-fcfc-46d4-bc91-7328790b6ea5", // Ativar Conta
    up6: "https://pay.asegupag.com/checkout/f1c41e05-1258-48c0-8eef-f23aa37251fe", // Registro
    up7: "https://pay.asegupag.com/checkout/942affcc-9893-4f0e-bd06-94256490e399", // Acréscimo
    up8: "https://pay.asegupag.com/checkout/a3621c8c-6a52-4e77-9f90-3d1285f77dfb", // Documento
    up9: "https://pay.asegupag.com/checkout/df59d51a-b31e-43eb-a327-cb427e3ef060", // Aplicativo
    up10:"https://pay.asegupag.com/checkout/7582be24-abe1-48df-b1dd-c0f713617249", // Abertura
    up11:"https://pay.asegupag.com/checkout/100d5dcd-a849-4549-ac8f-e95a116ec635", // Consultoria
    up12:"https://pay.asegupag.com/checkout/5b7d58a7-575f-4d71-929f-265b8468d7e6"  // Administrativo
};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);
