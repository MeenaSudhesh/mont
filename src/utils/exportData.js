const xl = require('excel4node');
const path = require('path');


const exportReportData = async (headerList, result) => {

    try {

        let wb = new xl.Workbook();
        let ws = wb.addWorksheet('Mont - Report List Data');
        let style = wb.createStyle({
            font: { size: 12, },
            numberFormat: '#,##0.00; (#,##0.00); -',
        });

        headerList.map((el, i) => {
            ws.cell(1, i + 1).string(el).style(style);
        })

        let i = 1;

        result.forEach(data => {
            ws.cell(i + 1, 1).string((i).toString()).style(style);
            ws.cell(i + 1, 2).string(data.new).style(style);
            ws.cell(i + 1, 3).string(data.repeat).style(style);
            ws.cell(i + 1, 4).string(data.slabsTagged).style(style);
            ws.cell(i + 1, 4).string(data.slabsReleased).style(style);
            i++;
        });

        const reqPath = path.join(__dirname, '../../').replace(/\\/g, '/');

        console.log("reqPath", reqPath);

        let name = "Report"

        await wb.write(reqPath + `public/uploads/${name}-data-details.xlsx`);

        let host = process.env.BACKEND_HOST;

        const paymentExcelFileURL = `${host}/public/uploads/${name}-data-details.xlsx`;

        return paymentExcelFileURL;


    } catch (e) {
        throw e
    }
}

module.exports = {  exportReportData }