export class Ciops{
    private id : number;
   private Nome: string;
   private Telefone: string;
   private Idade: string;
   private Foto_de_Identificacao: string;
   private Data: string;
   private Hora: string;
   private Endereco_da_Ocorrencia: string;
   private Bairro : string;
   private Ponto_de_Referencia : string;
   private Tipo_de_Ocorrencia : string;
   private Descricao_da_Ocorrencia : string;
   private Eu_sou_a_Vitima: string;
   private Foto : string;
   private Video: string;

   

    constructor(id : number, Nome : string, Telefone: string, Idade: string, Foto_de_Identificacao: string, Data: string, Hora: string, Endereco_da_Ocorrencia : string, Bairro: string, Ponto_de_Referencia: string, Tipo_de_Ocorrencia: string, Descricao_da_Ocorrencia : string, Eu_sou_a_Vitima: string, Foto: string, Video: string){
        this.id = id;
        this.Nome = Nome;
        this.Telefone =  Telefone;
        this.Idade = Idade;
        this.Foto_de_Identificacao =Foto_de_Identificacao;
        this.Data = Data;
        this.Hora = Hora;
        this.Endereco_da_Ocorrencia = Endereco_da_Ocorrencia;
        this.Bairro = Bairro;
        this.Ponto_de_Referencia = Ponto_de_Referencia;
        this.Tipo_de_Ocorrencia = Tipo_de_Ocorrencia;
        this.Descricao_da_Ocorrencia = Descricao_da_Ocorrencia;
        this.Eu_sou_a_Vitima = Eu_sou_a_Vitima;
        this.Foto = Foto;
        this.Video = Video;
    
    }
}