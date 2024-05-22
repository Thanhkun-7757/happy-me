document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("fqCu0rU0f8PdraPgd");

  const showFormButton = document.getElementById("showFormButton");
  const formContainer = document.getElementById("formContainer");
  const confirmButton = document.getElementById("confirmButton");
  const cancelButton = document.getElementById("cancelButton");
  const customerForm = document.getElementById("customerForm");

  showFormButton.addEventListener("click", function () {
    formContainer.classList.toggle("hidden");
  });

  confirmButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    if (name) {
      const templateParams = {
        to_email: "nguyenbathanh20122000@gmail.com",
        from_name: "Website Form",
        message: `Họ Tên Khách Hàng: ${name}`,
      };

      emailjs.send("service_oeyzchk", "template_z4k5i58", templateParams).then(
        function (response) {
          Swal.fire({
            icon: "success",
            title: "Thành công",
            text: "Email gửi thành công!",
          });
          customerForm.reset();
          formContainer.classList.add("hidden");
        },
        function (error) {
          Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: "Gửi email thất bại...",
          });
        }
      );
    } else {
      Swal.fire({
        icon: "warning",
        title: "Cảnh báo",
        text: "Vui lòng điền họ tên.",
      });
    }
  });

  cancelButton.addEventListener("click", function () {
    formContainer.classList.add("hidden");
    customerForm.reset();
  });
});
