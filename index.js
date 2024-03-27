const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

async function print() {
    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: '//localhost/POS-80'
    });
    
    printer.alignCenter();
    printer.bold(true);
    printer.setTextDoubleHeight();
    printer.setTextDoubleWidth(); 
    printer.println("Parcelamos Tudo");
    printer.setTextNormal(); 
    printer.println("Comprovante\n");
    printer.bold(false);
    printer.println("21/03/2024 12:29");
    
    printer.drawLine();
    
    printer.bold(true);
    printer.println("Cliente\n");
    printer.bold(false);
    printer.println("Matheus Gois Vieira");
    printer.println("(61) 92783-2983");
    printer.println("293.293.456-23");
    printer.println("email@.....com");
    
    printer.drawLine();
    
    printer.bold(true);
    printer.println("Débitos\n");
    printer.bold(false);
    printer.bold(true);
    printer.leftRight("Banco citibank 123...", "");
    printer.bold(false);
    printer.leftRight("123183981728791823...", "R$ 12,29");
    printer.bold(true);
    printer.leftRight("Detran SP", "");
    printer.bold(false);
    printer.leftRight("[MULTA] Multa de transito", "R$ 12,29");
    printer.bold(true);
    printer.leftRight("Detran SP", "");
    printer.bold(false);
    printer.leftRight("[MULTA] Multa de transito", "R$ 12,29");
    
    printer.drawLine();
    
    printer.bold(true);
    printer.println("Cartão de Crédito\n");
    printer.bold(false);
    printer.tableCustom([
        { text:"Mastercard", align:"LEFT" },
        { text:".... 1545", align:"RIGHT", bold: true }
    ]);
    printer.tableCustom([
        { text:"2 parcelas de ", align:"LEFT" },
        { text:"R$ 230,00", align:"RIGHT", bold: true }
    ]);
    
    printer.drawLine();
    
    printer.tableCustom([
        { text:"Subtotal", align:"LEFT" },
        { text:"R$ 450,00", align:"RIGHT", bold: true }
    ]);
    printer.tableCustom([
        { text:"Taxa", align:"LEFT" },
        { text:"R$ 10,00", align:"RIGHT", bold: true }
    ]);
    printer.tableCustom([
        { text:"Total", align:"LEFT", bold: true },
        { text:"R$ 460,00", align:"RIGHT", bold: true }
    ]);
    
    printer.drawLine();

    printer.leftRight("Terminal", "70c3fdb1-1fbd-4b7e-bf10-b3a21e0d18a9");
    printer.leftRight("NSU", "2381939298");
    printer.leftRight("Autorização", "2381939298");
    
    printer.drawLine();

    printer.bold(true);
    printer.println("Obrigado pelo pagamento!");
    printer.bold(false);
    printer.println("Você receberá um link para baixar o comprovante de quitação por e-mail.\n");
    printer.println("Impresso em 27/03/2024 11:47");
    
    printer.cut();
    
    printer.execute()
        .then(resp => console.log("print done:", resp))
        .catch(console.error)

}

print()
