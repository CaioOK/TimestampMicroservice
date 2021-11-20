/*  Hash Comments
  #1: Quando o número unix é passado como parâmetro na rota ele chega em req.params como
  string, e ao passá-lo como parâmetro para new Date() é retornado "Invalid Date", então
  para resolver isto é só transformar em number. Mas uma data string no formato 2020-11-20
  não é parseável para number por isso o "if" para tratar este caso.

  #2: Se a data passada na url for vazia é criada uma data atual (new Date() sem parâmetro).
  Se não é criada uma data com o parametro da rota, se for uma data inválida a variável
  newDate receberá "Invalid Date".
*/

const dateHandler = (req, res) => {
  let { date } = req.params;

  if (Number(date)) date = Number(date); // #1

  const newDate = date ? new Date(date) : new Date(); // #2

  if (newDate == 'Invalid Date') {
    return res.status(400).json({ error: `${newDate}`})
  }

  const utc = newDate.toUTCString();
  const unix = newDate.valueOf();

  res.status(200).json({ unix, utc });
};

module.exports =  dateHandler;
