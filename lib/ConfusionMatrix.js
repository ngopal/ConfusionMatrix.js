// Written by Nikhil Gopal
// http://www.nikhilgopal.com

function TwoCellCalculation(k,j) {
  return(k/(k+j));
}

function ConfusionMatrix(a,b,c,d) {
  this.n = a+b+c+d;
  this.true_positives = a;
  this.false_positives = b;
  this.false_negatives = c;
  this.true_negatives = d;
  this.sensitivity = TwoCellCalculation(a,c);
  this.specificity = TwoCellCalculation(b,d);
  this.ppv = TwoCellCalculation(a,b);
  this.npv = TwoCellCalculation(c,d);
  this.positive_likelihood = this.sensitivity / (1-this.specificity);
  this.negative_likelihood = 1/this.positive_likelihood;
  this.prevalence = (a+c)/(a+b+c+d);
  this.fpr = 1 - this.specificity;
  this.fdr = 1 - this.ppv;
  this.fnr = this.false_negatives / (this.false_negatives+this.true_positives);
  this.mcc = ((this.true_positives*this.true_negatives)-(this.false_positives*this.false_negatives))/Math.sqrt((this.true_positives+this.false_positives)*(this.true_positives+this.false_negatives)*(this.true_negatives+this.false_positives)*(this.true_negatives+this.false_negatives));
  this.acc = (this.true_positives+this.true_negatives)/this.n;
  this.f1 = 2*(this.true_positives)/(2*this.true_positives+this.false_positives+this.false_negatives);
  this.informedness = this.sensitivity+this.specificity-1;
  this.markedness = this.ppv + this.npv - 1;
  return(this);
}


