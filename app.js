async function pay() {
    // جمع البيانات من الحقول
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    // تحقق من أن الحقول ليست فارغة
    if (!phone || !amount) {
        alert("يرجى إدخال رقم الهاتف والمبلغ.");
        return;
    }

    // إعداد البيانات التي سيتم إرسالها إلى API
    const requestData = {
        username: '888719177', // اسم المستخدم
        password: 'omaramin',   // كلمة السر
        account_number: '888719177', // رقم الحساب
        token: 'jfnNoblOT9x2GJyr',    // التوكن
        phone: phone,
        amount: amount
    };

    try {
        // إرسال الطلب إلى API باستخدام Fetch API
        const response = await fetch('http://82.114.181.89/agentsservice2/agentsservice.svc?wsdl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        // التعامل مع الرد من API
        const result = await response.json();

        // عرض نتيجة العملية
        if (response.ok) {
            document.getElementById("result").textContent = `تم تسديد رصيد بقيمة ${amount} ريال لرقم الهاتف ${phone}.`;
        } else {
            document.getElementById("result").textContent = `حدث خطأ: ${result.message}`;
        }

    } catch (error) {
        document.getElementById("result").textContent = "حدث خطأ أثناء محاولة التسديد.";
        console.error(error);
    }
}
