class Cuenta {
    protected saldo: number;
    protected numConsignaciones: number;
    protected numRetiros: number;
    protected tasaAnual: number;
    protected comisionMensual: number;

    constructor(saldo: number, tasaAnual: number) {
        this.saldo = saldo;
        this.numConsignaciones = 0;
        this.numRetiros = 0;
        this.tasaAnual = tasaAnual;
        this.comisionMensual = 0;
    }

    consignar(cantidad: number): void {
        this.saldo += cantidad;
        this.numConsignaciones++;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.numRetiros++;
        } else {
            console.log("No hay suficientes fondos.");
        }
    }

    calcularInteresMensual(): void {
        const interesMensual = (this.tasaAnual / 12) / 100;
        this.saldo *= (1 + interesMensual);
    }

    extractoMensual(): void {
        this.saldo -= this.comisionMensual;
        this.calcularInteresMensual();
    }

    imprimir(): void {
        console.log("Saldo:", this.saldo);
        console.log("Comisión mensual:", this.comisionMensual);
        console.log("Número de transacciones realizadas:", this.numConsignaciones + this.numRetiros);
    }
}

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
