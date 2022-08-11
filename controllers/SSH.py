import paramiko
import telnetlib
import time
import sys
import os.path, re, ftplib, csv


import shutil, glob, datetime

from datetime import datetime

## get ngay gio
now = datetime.now() 
# dd/mm/YY H:M:S
new_date_time = now.strftime("%d/%m/%Y %H:%M:%S")


#ham telet OLT 

def check_sshASR (ip, user_ssh, password_ssh):
   ssh = paramiko.SSHClient()
   ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
   ssh.connect(ip, username=user_ssh, password=password_ssh)
   #print(ip)
   #print(user_ssh)
   #print(password_ssh)
   banner_start = "==================YOU ARE CONNECTING "  " ROUTER=================="
   #print(banner_start)
   lenh = 'show subscribers user-name ftthomc2\n'
   lenhktxacthuc  = sys.argv[1]    
 
   lenh2 = 'clear network-access aaa subscriber username ftthomc2\n'     
   #ssh_conn = ssh.invoke_shell()
   #output = ssh_conn.recv(65535)
   lenharr = ['show subscribers user-name ftthomc2\n','clear network-access aaa subscriber username ftthomc2\n','show subscribers user-name ftthomc2\n']
			
   ssh.connect(ip, username=user_ssh, password=password_ssh)
   stdin,stdout,stderr=ssh.exec_command(lenhktxacthuc)
   outlines=stdout.readlines()
   resp=''.join(outlines)
   output ='bras_kgg_01@KGG-BNG1-MX960_RE0>'+ lenhktxacthuc +resp
   print(output)
   ssh.close()

check_sshASR('10.10.50.2','bras_kgg_01','vtkgg@quantri')

   
    

    
   
  

   
    


