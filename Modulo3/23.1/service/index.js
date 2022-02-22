let stringVazia = ''; // Uma string vazia (que também é um valor falseável)

let operadorOr = stringVazia || 'Hello'; // retorna 'Hello' pois string vazia é falseável ('' == false)
operadorOr = 0 || 'Hello'; // retorna 'Hello' pois string vazia é falseável (0 == false)

let operadorDeCoalescencia = stringVazia ?? 'Hello'; // retorna '' pois '' não é idêntico a false ('' !== false)
let operadorDeCoalescencia = 0 ?? 'Hello'; // retorna 0 pois 0 não é idêntico a false (0 !== false)
