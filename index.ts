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

