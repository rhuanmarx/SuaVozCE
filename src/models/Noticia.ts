export class Noticia{
    private id : number;
    private Titulo : string;
    private NoticiaInicio: string;
    private NoticiaMeio: string;
    private NoticiaMeio2:  string;
    private NoticiaFim: string;
    private NoticiaFim2: string;
    private Hora: string;
    private Data: string;
    private Autor: string;
    private App: string;
    private LogoAutor: string;
    private Foto : string;
    private Info: string;

    constructor(id : number, Titulo : string, NoticiaInicio: string, NoticiaMeio: string, NoticiaMeio2:  string, NoticiaFim: string, NoticiaFim2: string, Hora: string, Data: string,   Autor: string, App: string, LogoAutor: string, Foto : string, Info: string,){
        this.id = id;
        this.Titulo = Titulo;
        this.NoticiaInicio = NoticiaInicio;
        this.NoticiaMeio =  NoticiaMeio;
        this.NoticiaMeio2 = NoticiaMeio2;
        this.NoticiaFim = NoticiaFim;
        this.Hora = Hora;
        this.Data = Data;
        this.Autor = Autor;
        this.App = App;
        this.LogoAutor = LogoAutor;
        this.Foto = Foto;
        this.Info = Info;
    }
}