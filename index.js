class Noticia {
    constructor(titulo, data, resumo, texto) {
      this.titulo = titulo;
      this.data = data;
      this.resumo = resumo;
      this.texto = texto;
    }
  
  
    mostrarNoticia() {
      return this.titulo + "\n" + this.data + "\n" + this.resumo + "\n" + "\n" + this.texto
    }
  }
  
  let noticia = new Noticia('Operação em 9 estados e no DF mira lavagem de dinheiro do tráfico do RJ; esquema movimentou R$ 3 bilhões em 3 anos',
  '23/03/2022', 'Três pessoas foram presas. Justiça também determinou o bloqueio de R$ 681 milhões nas contas dos suspeitos e o arresto de bens.',
  'A Polícia Civil do RJ e o Ministério Público do Rio de Janeiro (MPRJ) iniciaram nesta quarta-feira (23), em nove estados e no DF, a Operação Mercador de Ilusões, contra a lavagem de dinheiro do Comando Vermelho, a maior facção criminosa do estado. Segundo as investigações, o esquema do tráfico de drogas movimentou R$ 3 bilhões entre 2019 e 2021.');
  console.log(noticia.mostrarNoticia())
  