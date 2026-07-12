const PDFDocument=require('pdfkit');
const fs=require('fs');
const path=require('path');
const {v4:uuid}=require('uuid');
async function generateReport(data){
 if(!fs.existsSync('reports')) fs.mkdirSync('reports');
 const filename=`${uuid()}.pdf`;
 const filepath=path.join('reports',filename);
 const doc=new PDFDocument();
 doc.pipe(fs.createWriteStream(filepath));
 doc.fontSize(22).text('Sales Report');
 doc.moveDown();
 data.forEach(i=>doc.text(`${i.name}: Rs ${i.sales}`));
 doc.end();
 return filename;
}
module.exports={generateReport};
