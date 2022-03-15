function main() {
    return {
        colors_a : ['green','orange','blue','white','brown'],
        colors_b : ['green','yellow', 'blue', 'pink','gray'],
        permutations : [],
        page : 3 ,
        step: 0,
        pages: 5,
        getArrayMutations() {
            if (arr.length === 1) {
                perms.push(this.colors_b.slice(0));
            }
            for (i = 0; i < this.colors_b.length; i++) {
                getArrayMutations(this.colors_b)
                if (this.colors_b.length % 2){
                    this.colors_b[0] = this.colors.b[this.colors_b.length - 1];
                    this.colors_b[this.colors_b.length - 1] = this.colors_b[0];
                } else {
                    this.colors_b[i] = this.colors_b[this.colors_b.length - 1];
                    this.colors_b[this.colors_b.length - 1] =  this.colors_b[i];
                }
            }
        },
        calcCombinations(){
            arr = this.colors_b;
            findPermutations = (arr = []) => {
            res = []
            helper = (arr2) => {
                if (arr2.length==arr.length)
                return res.push(arr2)
                for(e of arr)
                if (!arr2.includes(e))
                helper([...arr2, e])
            };
            helper([])
            return res;
            };
            res = findPermutations(arr);
            for (i=0; i<res.length; i++){
                this.permutations[i] = [ 
                    i+1,
                    true,
                    res[i][0],
                    res[i][1],
                    res[i][2],
                    res[i][3],
                    res[i][4]
                ];
            }
            this.step = res.length / this.pages;
        },
        next(){
            if (this.page < this.pages){
                this.page += 1;
                console.log(this.page)
            }
        },
        prev(){
            if (this.page  > 1){
                this.page -= 1;
                console.log(this.page)
            }
        }
    }
}