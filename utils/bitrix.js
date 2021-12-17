export const sendLead = (data) => {

    return fetch('https://orangeapartments24.bitrix24.ru/rest/60/rhhylm0j9vut39m9/crm.lead.add.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fields": {
                    "TITLE": `Вебинар // Заявка с лендинга`,
                    "NAME": data.name,
                    "PHONE": [ { "VALUE": data.phone, "VALUE_TYPE": "WORK" } ] 
                },
                "params": { 'REGISTER_SONET_EVENT': 'Y' }
            })
    })

}