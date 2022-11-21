from django.http import HttpResponse
from django.template import Template , Context 
#primera vista
def saludo(request):
    return HttpResponse("hola mundo")

def registro(request):

    doc_externo=open("C:/Users/57316/Desktop/ProyectoDjango/PILAR/plantillas/Registro.html")
    plt=Template(doc_externo.read())
    doc_externo.close()
    ctx=Context()
    documento=plt.render(ctx)

    return HttpResponse(documento)
