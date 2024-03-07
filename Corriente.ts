import { Cuenta } from './Cuenta';

export class CuentaCorriente extends Cuenta {
    private sobregiro: number;

    constructor(saldo: number, tasaAnual: number) {
        super(saldo, tasaAnual);
        this.sobregiro = 0;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo) {
            super.retirar(cantidad);
        } else {
            this.sobregiro += cantidad - this.saldo;
            this.saldo = 0;
            this.numRetiros++;
        }
    }

    consignar(cantidad: number): void {
        if (this.sobregiro > 0) {
            if (cantidad <= this.sobregiro) {
                this.sobregiro -= cantidad;
            } else {
                this.saldo += cantidad - this.sobregiro;
                this.sobregiro = 0;
            }
        } else {
            super.consignar(cantidad);
        }
    }

    imprimir(): void {
        super.imprimir();
        console.log("Sobregiro:", this.sobregiro);
    }
}
