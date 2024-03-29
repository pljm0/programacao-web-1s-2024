function transporMatriz(A) {
    console.log("Matriz original:");
    imprimirMatriz(A);

    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    console.log("Matriz transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);
