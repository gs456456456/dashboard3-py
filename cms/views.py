from django.shortcuts import render
from django.contrib.auth import authenticate
from django.http import HttpResponse
import json
from cms import models
import hashlib
import os


def confirmapi(request):
    if request.method == 'POST':
        print(request.POST)
        if request.POST.get('username') and request.POST.get('password'):
            print(11111)
            print(request.POST.get('username'))
            print(request.POST.get('password'))
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(username = username,password=password)
            if user is not None:
                if user.is_active:
                    user_obj = models.Profile.objects.get(user__username=username)
                    user_list = list(user_obj.line_set.all().values('num'))
                    num_list = []
                    for item in user_list:
                        num_list.append(item['num'])
                    token = hashlib.sha1(os.urandom(24)).hexdigest()
                    context = {'status':'1','line':num_list,'token':token}
                    print("User is valid, active and authenticated")
                    return HttpResponse({json.dumps(context)})
                else:
                    print("The password is valid, but the account has been disabled!")
                    return HttpResponse({json.dumps({'status':'2'})})
            else:
                print("The username and password were incorrect.")
                return HttpResponse({json.dumps({'status':'3'})})
        else:
            print('出现未知错误')
            return HttpResponse({json.dumps({'status':4})})

def test(request):
    a = models.Profile.objects.get(user__username='123')
    print(list(a.line_set.all().values('num')))
    return HttpResponse('ok')

def line4(request):
    return render(request,'index.html')
# Create your views here.
