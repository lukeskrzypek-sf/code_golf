import sys
def F(n,c): 
    return((((c[::2],c[1]+c[0]*(n-5))[n<9]),c[:2])[n==4],c[0]*n)[n<4]
for s in open(sys.argv[1]):
    n=int(s)
    print(n//1000*'M'+F(n//100%10,'CDM')+F(n//10%10,'XLC')+F(n%10,'IVX'))
