export class OutrosPortais{
    private id : number;
    private titulo : string;
    private descricaoInicio: string;
    private descricaoMeio: string;
    private descricaoFim: string;
    private hora : string;
    private data: string;
    private autor: string;
    private app:  string;
    private logoAutor: string;
    private foto : string;
    private info : string;

    constructor(id : number, titulo : string, descricaoInicio: string, descricaoMeio: string, descricaoFim: string, hora: string,  data : string, autor: string, app: string, logoAutor: string,  foto : string, info: string){
        this.id = id;
        this.titulo = titulo;
        this.descricaoInicio =  descricaoInicio;
        this.descricaoMeio = descricaoMeio;
        this.descricaoFim = descricaoFim;
        this.hora = hora;
        this.data = data;
        this.autor = autor;
        this.app = app;
        this.logoAutor = logoAutor;
        this.foto = foto;
        this.info = info;
    }
}