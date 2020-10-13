
// You should implement your task here.

module.exports = function towelSort (matrix) {
   
         var m = matrix.length, n = matrix[0].length, AT = [];
              for (var i = 0; i < m; i++)
       { if ((i+1) % 2==0) {
         for (var j = 0; j < n; j++) AT[i]= matrix[i][j];
        }
        else {
             for (var j = (n-1); j >= 0; j--) AT[i]= matrix[i][j];
       }
      return AT;
        }
    }
