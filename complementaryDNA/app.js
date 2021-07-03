function DNAStrand(dna) {
    let result = '';
    //your code here
    // I will try to use for...of loop
    for (let codon of dna) {
        // result = result + codon;
        if (codon === 'A') {
            result = result + 'T';
        } else if (codon === 'T') {
            result = result + 'A';
        } else if (codon === 'C') {
            result = result + 'G'
        } else if (codon === 'G') {
            result = result + 'C'
        } else {
            result = result + codon;
        }
        // return result;
    }
    return result;
}