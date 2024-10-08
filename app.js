async function pay() {
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    if (!phone || !amount) {
        alert("يرجى إدخال رقم الهاتف والمبلغ.");
        return;
    }

    const requestData = {
        username: '888719177', // اسم المستخدم
        password: 'omaramin',   // كلمة السر
        account_number: '888719177', // رقم الحساب
        token: 'jfnNoblOT9x2GJyr',    // التوكن
        phone: phone,
        amount: amount
    };

    try {
        const response = await fetch('http://82.114.181.89/agentsservice2/agentsservice.svc?wsdl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        const result = await response.json();

        console.log(result); // تسجيل الاستجابة

        if (response.ok) {
            document.getElementById("result").textContent = `تم تسديد رصيد بقيمة ${amount} ريال لرقم الهاتف ${phone}.`;
        } else {
            document.getElementById("result").textContent = `حدث خطأ: ${result.message || result.error}`;
        }

    } catch (error) {
        document.getElementById("result").textContent = "حدث خطأ أثناء محاولة التسديد.";
        console.error(error);
    }
}

async function checkBalance() {
    const phone = document.getElementById("phone").value;

    if (!phone) {
        alert("يرجى إدخال رقم الهاتف.");
        return;
    }

    const requestData = {
        username: '888719177', // اسم المستخدم
        password: 'omaramin',   // كلمة السر
        account_number: '888719177', // رقم الحساب
        token: 'jfnNoblOT9x2GJyr',    // التوكن
        phone: phone
    };

    try {
        const response = await fetch('http://82.114.181.89/agentsservice2/agentsservice.svc?wsdl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        const result = await response.json();

        console.log(result); // تسجيل الاستجابة

        if (response.ok) {
            document.getElementById("balanceResult").textContent = `رصيد رقم الهاتف ${phone} هو: ${result.balance} ريال.`;
        } else {
            document.getElementById("balanceResult").textContent = `حدث خطأ: ${result.message || result.error}`;
        }

    } catch (error) {
        document.getElementById("balanceResult").textContent = "حدث خطأ أثناء محاولة الاستعلام عن الرصيد.";
        console.error(error);
    }
            }
