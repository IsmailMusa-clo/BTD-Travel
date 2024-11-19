document.addEventListener("DOMContentLoaded", function () {
  const printButton = document.getElementById('printBtn');

  printButton.addEventListener("click", function () {
    const tableContainer = document.querySelector("table");

    const printWindow = window.open('', '', 'width=800,height=600');

    printWindow.document.open();
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <title>الحركات المالية - BTD</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse; 
          }
          th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: center;
          }
          td span.transferPlace, td.price{
            color: #69BE96;
            font-weight: 600 
          }
          th {
            background-color: #00BE64;
            color: white;
          }
          tr:nth-child(even) {
            background-color: #F8EAEA;
          }
        </style>
      </head>
      <body>
        ${tableContainer.outerHTML}
      </body>
      </html>
    `);
    printWindow.document.close();

    printWindow.print();

    printWindow.onafterprint = () => printWindow.close();
  });
});
