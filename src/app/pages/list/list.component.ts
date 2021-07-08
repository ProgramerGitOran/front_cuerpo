import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { Personal } from '../../models/personal.model';
import { globalConstants } from '../../common/global-constants';


interface IPersonalTable{
     id_personal: number,
     apellido_1: string,
     apellido_2: string,
     nombre_1: string,
     nombre_2: string,
     nombre_3: string,
     dni: number,
     legajo: number,
     sexo: string,
     estado_civil: string,
     destino: string,
     departamento: string,
     division: string,
     sector : string,
     seccion_guardia : string,
     funcion : string,
     escalafon: string,
     escala_jerarquica: string,
     grado: string,
     nacionalidad : string,
     domicilio : string,
     provincia : string,
     departamento_provincial: string,
     municipio: string,
     ciudad: string,
     nivel_educativo: string,
     situacion : string,
     foto: string,
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [
      './list.component.scss'
  ]
})
export class ListComponent implements OnInit {

  personalList: Personal[]=[];
  dataTable: IPersonalTable[]=[];
  totalRecords: number = 0;
  selectedPersonal: IPersonalTable[]=[];
  loading: boolean = true;
  
    // cols: any[];

    // loading: boolean;
    
    // representatives: Representative[];

    constructor(private personalService: PersonalService) { }

    ngOnInit() {
        const destino: number = globalConstants.destino_usuario;
        this.personalService.listarPersonal(destino).
                        subscribe(respuesta => {
            this.totalRecords = respuesta[1];
            this.personalList = respuesta[0];
            const lista = respuesta[0];
            //const [...data] = this.personalList;
            this.dataTable = lista.map(item => {
               //const {altura, fecha_nacimiento, fecha_ingreso, ultimo_ascenso, cuil,...newItem} = item;
               const registro: IPersonalTable = {
                id_personal:item.id_personal,
                apellido_1:item.apellido_1,
                apellido_2:item.apellido_2,
                nombre_1:item.nombre_1,
                nombre_2:item.nombre_2,
                nombre_3:item.nombre_3,
                dni:item.dni,
                legajo:item.legajo,
                sexo:item.sexo.sexo,
                estado_civil:item.estado_civil? item.estado_civil.estado_civil : null,
                destino:item.destino? item.destino.destino : null,
                departamento:item.departamento? item.departamento.departamento : null,
                division:item.division? item.division.division : null,
                sector :item.sector? item.sector.sector : null,
                seccion_guardia : item.seccion_guardia? item.seccion_guardia.seccion : null,
                funcion :item.funcion,
                escalafon: item.escalafon.escalafon? item.escalafon.escalafon : null,
                escala_jerarquica: item.escala_jerarquica.escala_jerarquica? item.escala_jerarquica.escala_jerarquica : null,
                grado:item.grado.grado? item.grado.grado : null,
                nacionalidad :item.nacionalidad? item.nacionalidad : null,
                domicilio :item.domicilio,
                provincia :item.provincia? item.provincia.provincia : null,
                departamento_provincial:item.departamento_provincial? item.departamento_provincial.departamento_provincial : null,
                municipio:item.municipio? item.municipio.municipio : null,
                ciudad:item.ciudad,
                nivel_educativo:item.nivel_educativo? item.nivel_educativo.nivel_educativo : null,
                situacion :item.situacion? item.situacion.situacion : null,
                foto:item.foto,
               }
               return registro;
                        
             });
                        
              });
             this.loading = false;
    

     }

    // cargarListaPersonal(event: LazyLoadEvent) {  
    //     this.loading = true;

    //     setTimeout(() => {
    //         this.customerService.getCustomers({lazyEvent: JSON.stringify(event)}).then(res => {
    //             this.customers = res.customers;
    //             this.totalRecords = res.totalRecords;
    //             this.loading = false;
    //         })
    //     }, 1000);
    // }

  }
