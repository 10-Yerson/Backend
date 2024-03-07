import { Cuenta } from './Cuenta';
import { CuentaAhorros } from './Ahorros';
import { CuentaCorriente } from './Corriente';

const cuentaAhorros = new CuentaAhorros(15000, 5);
cuentaAhorros.consignar(2000);
cuentaAhorros.retirar(500);
cuentaAhorros.retirar(1500);
cuentaAhorros.retirar(1000);
cuentaAhorros.retirar(2000);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();

console.log("---------------------------------------");

const cuentaCorriente = new CuentaCorriente(5000, 2);
cuentaCorriente.consignar(3000);
cuentaCorriente.retirar(7000);
cuentaCorriente.retirar(3000);
cuentaCorriente.consignar(2000);
cuentaCorriente.extractoMensual();
cuentaCorriente.imprimir();
