export const sendLead = (data) => {

    return fetch('https://api.telegram.org/bot5019348332:AAE3EpTnN39bqXTT1pzsPevW1AKZKtUTjGg/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "text": `Orange Webinars // Новый лид 🔥 \n\nИмя: ${data.name} \nТелефон: ${data.phone}`,
                "chat_id": "147796272"
            })
    })

}