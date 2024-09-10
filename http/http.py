import socket

s=socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host='example.com'
port=80

s.connect((host,port))

request="GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
s.send(request.encode())

response=s.recv(4096)

print(response.decode())

s.close

