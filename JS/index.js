let emailHolder = document.querySelector('.email-holder');

let validateButton = document.querySelector('.btn');

let clearButton = document.querySelector('.clr-btn');

const key = `ema_live_XUGZcH2mSZgwPP6NVoVNZpsvaeUBFQ5MKCBX6hMB`;

let rslt = document.querySelector('.validator-result');

async function validate(url){
    try {
        let validatorResult = await axios.get(url);
        return validatorResult.data;
    } catch(error){
        return "Not able to send request";
    }
}

validateButton.addEventListener('click',async()=>{
    let emailAddress = emailHolder.value;

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${emailAddress}`;
    let validatorResult = await validate(url);

    let returnableKeys = ``;

    for (result of Object.keys(validatorResult)){
        returnableKeys = returnableKeys +  `<li><b>${result}</b> :  ${validatorResult[result]}</li>`
    }

    let lstitm = document.createElement('li');
    lstitm.classList.add("rslt-class");
    lstitm.innerHTML = returnableKeys;
    rslt.append(lstitm);

    emailHolder.value = null;
})

clearButton.addEventListener('click',()=>{
    rslt.removeChild(document.querySelector('.rslt-class'));
})