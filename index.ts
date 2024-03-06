














































class CuentaAhorros extends Cuenta {
    private activa: boolean;

    constructor(saldo: number, tasaAnual: number) {
        super(saldo, tasaAnual);
        this.activa = saldo >= 10000;
    }

    consignar(cantidad: number): void {
        if (this.activa) {
            super.consignar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    retirar(cantidad: number): void {
        if (this.activa) {
            super.retirar(cantidad);
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    extractoMensual(): void {
        if (this.numRetiros > 4) {
            this.comisionMensual += (this.numRetiros - 4) * 1000;
        }
        this.activa = this.saldo >= 10000;
        super.extractoMensual();
    }

    imprimir(): void {
        super.imprimir();
        console.log("Estado de la cuenta:", this.activa ? "Activa" : "Inactiva");
    }
}

const cuentaAhorros = new CuentaAhorros(15000, 5);
cuentaAhorros.consignar(2000);
cuentaAhorros.retirar(500);
cuentaAhorros.retirar(1500);
cuentaAhorros.retirar(1000);
cuentaAhorros.retirar(2000);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();

console.log("---------------------------------------");