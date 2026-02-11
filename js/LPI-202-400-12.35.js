var preguntas202_400 = [
  {
    "question": "1. Después de configurar Apache para ejecutarse en un entorno chroot como usuario no-root, httpd ya no arranca. ¿Cuál es la causa principal del problema?",
    "options": [
      "A. Apache necesita iniciarse como root para vincularse al puerto 80",
      "B. Apache no puede leer el archivo index.html principal porque no se movió al entorno chroot",
      "C. Es necesario añadir una línea LoadModule para mod_chroot en httpd.conf",
      "D. Apache requiere una directiva de Virtual Host cuando se ejecuta desde un entorno chroot",
      "E. La configuración de mod_chroot necesita la ruta absoluta al entorno chroot"
    ],
    "answer": "A",
    "explicacion": "Los puertos por debajo de 1024 son privilegiados; Apache debe iniciar como root para abrir el puerto 80 antes de cambiar al usuario no-root[cite: 15, 17, 20].",
    "pista": "Puertos privilegiados."
  },
  {
    "question": "2. Considerando la tabla de rutas IP del kernel, ¿cuál de los siguientes comandos debe usarse para eliminar la ruta a la red 10.10.1.0/24?",
    "options": [
      "A. routedel 10.10.1.0",
      "B. routedel 10.10.1.0/24",
      "C. routedel-net 10.10.1.0/24",
      "D. routedel 10.10.1.0/24 gw 192.168.246.11",
      "E. routedel-net 10.10.1.0"
    ],
    "answer": "C",
    "explicacion": "El comando 'routedel-net' seguido de la red y su máscara es el procedimiento estándar para eliminar rutas de red específicas[cite: 21, 24, 27].",
    "pista": "Eliminar ruta de red."
  },
  {
    "question": "3. ¿Qué archivo, en un servidor majordomo, contiene la lista de todas las direcciones de correo de los miembros de la lista 'linux-users'? (Introduce solo el nombre del archivo)",
    "answer": "linux-users",
    "explicacion": "Majordomo utiliza un archivo con el mismo nombre de la lista para gestionar sus suscriptores[cite: 28, 30].",
    "pista": "Mismo nombre que la lista."
  },
  {
    "question": "4. Los usuarios en el ACL 'sales_net' solo deben tener acceso a Internet en las horas especificadas en el time_acl 'sales_time'. ¿Cuál es la directiva http_access correcta?",
    "options": [
      "A. http_access deny sales_time sales_net",
      "B. http_access allow sales_net sales_time",
      "C. http_access allow sales_net and sales_time",
      "D. allow http_access sales_net sales_time",
      "E. http_access sales_net sales_time"
    ],
    "answer": "B",
    "explicacion": "En Squid, colocar dos ACLs en la misma línea implica una operación lógica AND[cite: 31, 34, 38].",
    "pista": "Permitir red en horario."
  },
  {
    "question": "5. La red interna (192.168.1.0/24) necesita poder retransmitir correo a través del servidor sendmail. ¿Qué línea debe añadirse a /etc/mail/access para permitirlo?",
    "options": [
      "A. 192.168.1.0/24 RELAY",
      "B. 192.168.1 RELAY",
      "C. 192.168.1.0/24 OK",
      "D. 192.168.1 OK"
    ],
    "answer": "B",
    "explicacion": "Sendmail utiliza prefijos de red seguidos de la acción RELAY para permitir el paso de correos[cite: 39, 42, 45].",
    "pista": "Prefijo de red."
  },
  {
    "question": "6. ¿Qué comando se utiliza para imprimir las estadísticas del kernel de NFS?",
    "answer": "nfsstat",
    "explicacion": "nfsstat es la herramienta que muestra contadores estadísticos de la actividad del cliente y servidor NFS[cite: 46, 48].",
    "pista": "Estadísticas NFS."
  },
  {
    "question": "7. Para configurar un servicio LDAP en 'domain Ltd', ¿qué entrada debe añadirse a slapd.conf para establecer el rootdn con el CN 'Manager' y el dominio 'domain.com'?",
    "options": [
      "A. rootdn cn=Manager de domain dc=com",
      "B. rootdn \"cn=Manager,dc=domain,dc=com\"",
      "C. rootdn en domain, dc=com, dc=Manager",
      "D. rootdn \"en=domain, dc=com, dc=Manager\""
    ],
    "answer": "B",
    "explicacion": "El formato DN requiere el uso de comas y componentes de dominio (dc) correctos[cite: 49, 54, 55].",
    "pista": "Formato DN estándar."
  },
  {
    "question": "8. Por defecto, OpenLDAP registra logs vía syslog. ¿Cuál es la directiva en slapd.conf para que los logs se escriban en /var/log/ldap.log?",
    "options": [
      "A. loglevel",
      "B. logfile",
      "C. syslogfile",
      "D. logfilepath"
    ],
    "answer": "B",
    "explicacion": "La directiva 'logfile' permite especificar una ruta de archivo local para la salida de registros de slapd[cite: 56, 58, 61].",
    "pista": "Archivo de log."
  },
  {
    "question": "9. vsftpd en un entorno chroot da el error: 'libc.so.6: cannot open shared object file'. ¿Qué DOS soluciones son posibles? (Elige dos)",
    "options": [
      "A. Compilar el código fuente de vsftpd estáticamente",
      "B. Añadir la ruta del chroot a /etc/ld.so.conf",
      "C. Crear un enlace simbólico fuera del chroot",
      "D. Copiar la librería requerida al directorio lib dentro del chroot",
      "E. Ejecutar chroot con la opción --static_libs"
    ],
    "answer": "A, D",
    "explicacion": "Un entorno chroot está aislado; necesita tener sus propias copias de las librerías o usar un binario estático[cite: 62, 65, 68, 70].",
    "pista": "Librerías internas o binario estático."
  },
  {
    "question": "10. Introduce el comando con parámetros para listar los trabajos de cron del usuario 'john'.",
    "answer": "crontab -u john -l",
    "explicacion": "La opción -u indica el usuario y -l lista el contenido del archivo crontab[cite: 71, 74].",
    "pista": "Listar crontab de usuario."
  },
  {
    "question": "11. ¿Qué tipo de registro DNS permite a los usuarios y aplicaciones realizar consultas de DNS inverso?",
    "options": [
      "A. CNAME",
      "B. IN",
      "C. PTR",
      "D. REV",
      "E. RIN"
    ],
    "answer": "C",
    "explicacion": "Los registros PTR (Pointer) asocian una dirección IP con un nombre de dominio[cite: 74, 77, 80].",
    "pista": "Registro de puntero."
  },
  {
    "question": "12. ¿Qué entrada en el archivo procmailrc enviará una copia de un correo a otra dirección?",
    "options": [
      "A. :0c",
      "B. :0 copy",
      "C. :c",
      "D. :copy",
      "E. :s"
    ],
    "answer": "A",
    "explicacion": "El flag 'c' indica a procmail que realice una copia (carbon copy) del mensaje[cite: 81, 88].",
    "pista": "Copia de correo."
  },
  {
    "question": "13. Una entrada en /etc/hosts.allow para permitir clientes no tiene efecto. ¿Cuál podría ser la causa?",
    "options": [
      "A. tcpd necesita la señal HUP",
      "B. El servicio necesita reiniciarse",
      "C. La máquina necesita reiniciarse",
      "D. Hay una entrada conflictiva en /etc/hosts.deny",
      "E. El servicio no soporta tcpwrappers"
    ],
    "answer": "E",
    "explicacion": "Si el binario del servicio no fue enlazado con libwrap, ignorará los archivos de hosts.allow/deny[cite: 89, 95, 96].",
    "pista": "Soporte de librería."
  },
  {
    "question": "14. Un ejecutable en /etc/init.d no se ejecuta al arrancar en el nivel de ejecución 2. ¿Cuál es la causa más probable?",
    "options": [
      "A. El script no ha sido declarado en /etc/services",
      "B. El runlevel 2 no está declarado en /etc/inittab",
      "C. El script tiene permisos 700 y es de root",
      "D. No se creó el enlace correspondiente en /etc/rc2.d"
    ],
    "answer": "D",
    "explicacion": "El sistema busca enlaces simbólicos en rcN.d para saber qué scripts ejecutar en cada nivel[cite: 97, 101, 102].",
    "pista": "Enlaces en rc2.d."
  },
  {
    "question": "15. Selecciona la afirmación INCORRECTA respecto al formato de archivo LDIF:",
    "options": [
      "A. Contiene una línea dn que indica dónde se añaden los atributos",
      "B. Una línea en blanco separa una entrada de otra",
      "C. Si un atributo contiene datos binarios, requiere configuración específica",
      "D. El archivo LDIF acepta cualquier tipo de codificación de archivo"
    ],
    "answer": "D",
    "explicacion": "Los archivos LDIF deben estar codificados específicamente en UTF-8[cite: 103, 107, 108].",
    "pista": "Codificación de archivos."
  },
  {
    "question": "16. Un servidor con eth0 (192.168.0.1) y eth1 (10.0.0.1) debe actuar como router, pero los datos no cruzan. ¿Qué DOS cosas deben hacerse? (Elige dos)",
    "options": [
      "A. Activar el reenvío IP con echo 1 > /proc/sys/net/ipv4/ip_forward",
      "B. Añadir nuevas cadenas de firewall para tráfico entrante y saliente",
      "C. Reconfigurar las reglas del firewall para permitir el cruce de redes",
      "D. Reiniciar la tabla de rutas",
      "E. Reiniciar el servidor"
    ],
    "answer": "A, C",
    "explicacion": "Se requiere habilitar el forwarding en el kernel y permitir el paso en el firewall[cite: 109, 115, 117, 120].",
    "pista": "Forwarding y firewall."
  },
  {
    "question": "17. ¿Qué opción en el archivo de configuración de ISC DHCPD define las direcciones de los servidores DNS enviadas a los clientes?",
    "options": [
      "A. domain-name-servers",
      "B. domain-server",
      "C. name-server",
      "D. servers"
    ],
    "answer": "A",
    "explicacion": "La directiva 'domain-name-servers' es la encargada de informar de los DNS a los clientes DHCP[cite: 121, 122, 126].",
    "pista": "Servidores de nombres."
  },
  {
    "question": "18. ¿Para qué se utiliza DNSSEC?",
    "options": [
      "A. Consultas DNS cifradas entre servidores de nombres",
      "B. Autenticación criptográfica de zonas DNS",
      "C. Consultas DNS secundarias para zonas locales",
      "D. Autenticación del usuario que inició la consulta",
      "E. Cifrado de consultas y respuestas DNS"
    ],
    "answer": "B",
    "explicacion": "DNSSEC proporciona integridad y autenticidad del origen de los datos mediante firmas digitales[cite: 127, 130, 134].",
    "pista": "Autenticación de zona."
  },
  {
    "question": "19. ¿Qué directiva de configuración de Squid define el método de autenticación a utilizar?",
    "options": [
      "A. auth_param",
      "B. auth_method",
      "C. auth_program",
      "D. auth_mechanism",
      "E. proxy_auth"
    ],
    "answer": "A",
    "explicacion": "auth_param es la directiva base para configurar los parámetros de los esquemas de autenticación en Squid[cite: 136, 137, 142].",
    "pista": "Parámetros de autenticación."
  },
  {
    "question": "20. ¿Qué comando se utiliza para recargar un conjunto de reglas de netfilter guardadas?",
    "options": [
      "A. iptables-restore",
      "B. iptables-recover",
      "C. iptables-load",
      "D. iptables-reload"
    ],
    "answer": "A",
    "explicacion": "iptables-restore restaura las reglas desde un volcado de texto compatible[cite: 143, 144, 148].",
    "pista": "Restaurar reglas."
  }
  
  
  
  
];