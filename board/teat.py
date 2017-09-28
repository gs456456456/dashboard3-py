import hashlib
import json
a = json.dumps({'a':1,'b':3})
print(a)
m = hashlib.md5()
m.update(a.encode('utf-8'))
print(m.hexdigest())
