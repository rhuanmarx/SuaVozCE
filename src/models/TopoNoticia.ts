export class TopoNoticia{
    private id : number;
    private Titulo : string;
    private DescricaoInicio: string;
    private DescricaoMeio: string;
    private DescricaoFim: string;
    private Hora : string;
    private Data: string;
    private Autor: string;
    private App:  string;
    private LogoAutor: string;
    private Foto : string;
    private Info : string;

    constructor(id : number, Titulo : string, DescricaoInicio: string, DescricaoMeio: string, DescricaoFim: string, Hora: string,  Data : string, Autor: string, App: string, LogoAutor: string,  Foto : string, Info: string){
        this.id = id;
        this.Titulo = Titulo;
        this.DescricaoInicio =  DescricaoInicio;
        this.DescricaoMeio = DescricaoMeio;
        this.DescricaoFim = DescricaoFim;
        this.Hora = Hora;
        this.Data = Data;
        this.Autor = Autor;
        this.App = App;
        this.LogoAutor = LogoAutor;
        this.Foto = Foto;
        this.Info = Info;
    }
}