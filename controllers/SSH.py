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

def check_sshBNG (ip, user_ssh, password_ssh,tenbng):
   ssh = paramiko.SSHClient()
   ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
   ssh.connect(ip, username=user_ssh, password=password_ssh)
   lenhktxacthuc  = sys.argv[1]    
 
   lenh2 = 'clear network-access aaa subscriber username ftthomc2\n'     
   #ssh_conn = ssh.invoke_shell()
   #output = ssh_conn.recv(65535)
   lenharr = ['show subscribers user-name ftthomc2\n','clear network-access aaa subscriber username ftthomc2\n','show subscribers user-name ftthomc2\n']
			
   ssh.connect(ip, username=user_ssh, password=password_ssh)
   stdin,stdout,stderr=ssh.exec_command(lenhktxacthuc)
   outlines=stdout.readlines()
   resp=''.join(outlines)
   output =tenbng+ lenhktxacthuc +resp
   print(output)
   #print('==========================================')
   ssh.close()
   
   #ket noi bng2 
#ket noi BNG1
check_sshBNG('10.10.50.2','bras_kgg_01','vtkgg@quantri','bras_kgg_01@KGG-BNG1-MX960_RE0>')
#ket noi BNG2
check_sshBNG('10.10.50.4','bras_kgg_01','vtkgg@quantri','bras_kgg_01@KGG-BNG2-MX960_RE0>')
check_sshBNG('10.10.50.3','bras_kgg_01','vtkgg@quantri','bras_kgg_01@KGG-BNG3-MX960_RE0>')

   
    

    
   
  

   
    


