import numpy as np
import math
#Input: the lists of prior probabilities, likelihood, and test data
#Output: list of corresponding posterior probabilities
#
def posteriorFunc(priorProb, likhd, data):
    posProb = []
    alpha = 0
    order = 0

    for i in range(0, len(data)):
        order += 1 if data[i] == 1 else 0

    for i in range(0, len(priorProb)):
        hyp = likhd[i]
        prior = priorProb[i]

        limeProb = hyp**order
        cherryProb = (1 - hyp)**(len(data) - order)

        posProb.append(limeProb * cherryProb * prior)

    alpha = 1 / np.sum(posProb)
    posProb = list(map(lambda x: x * alpha, posProb))

    return posProb

#Input the lists of prior probabilites, likhd/likelihood, training data, and one test datapoint
#Output: probability that the test datapoint happens
#Note: this function will call posteriorFunc to calculate the posterior probabilites 
def predictionFunc (priorProb, likhd, data, fPoint):
    posProb = posteriorFunc(priorProb, likhd, data)
    predictProb = 0

    for i in range(0, len(likhd)):
        lh = likhd[i] if fPoint == 1 else (1 - likhd[i])
        predictProb += lh * posProb[i]

    return predictProb
