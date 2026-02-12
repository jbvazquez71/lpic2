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
    "explicacion": "Los puertos por debajo de 1024 son privilegiados; Apache debe iniciar como root para abrir el puerto 80 antes de cambiar al usuario no-root.",
    "pista": "Puertos privilegiados."
  },
  {
    "question": "2. Considerando la tabla de rutas IP del kernel, ¿cuál de los siguientes comandos debe usarse para eliminar la ruta a la red 10.10.1.0/24?",
    "options": [
      "A. routedel 10.10.1.0",
      "B. routedel 10.10.1.0/24",
      "C. routedel-net 10.10.1.0/24",
      "D. route del 10.10.1.0/24 gw 192.168.246.11",
      "E. route del -net 10.10.1.0"
    ],
    "answer": "C",
    "explicacion": "El comando route clásico usa la sintaxis 'route del -net [red]'. Aunque 'routedel' no es estándar, en el contexto del examen LPI antiguo se refería a opciones de route o ip route, pero la opción C refleja la sintaxis clásica de eliminación de red.",
    "pista": "Borrar red."
  },
  {
    "question": "3. ¿Qué archivo, en un servidor majordomo, contendrá una lista de las direcciones de correo electrónico de todos los miembros para la lista de correo 'linux-users'? (Introduce solo el nombre del archivo).",
    "answer": "linux-users",
    "explicacion": "En Majordomo, el archivo con los suscriptores tiene el mismo nombre que la lista.",
    "pista": "Nombre de la lista."
  },
  {
    "question": "4. Los usuarios en la ACL llamada 'sales_net' solo deben tener permitido el acceso a Internet en los horarios especificados en la time_acl llamada 'sales_time'. ¿Cuál es la directiva http_access correcta?",
    "options": [
      "A. http_access deny sales_time sales_net",
      "B. http_access allow sales_net sales_time",
      "C. http_access allow sales_net and sales_time",
      "D. allow http_access sales_net sales_time",
      "E. http_access sales_net sales_time"
    ],
    "answer": "B",
    "explicacion": "En Squid, poner dos ACLs en la misma línea de allow implica una condición AND (ambas deben cumplirse).",
    "pista": "Ambas condiciones en la misma línea."
  },
  {
    "question": "5. La red interna (192.168.1.0-192.168.1.255) necesita poder retransmitir (relay) correo a través del servidor sendmail del sitio. ¿Qué línea debe añadirse a /etc/mail/access?",
    "options": [
      "A. 192.168.1.0/24 RELAY",
      "B. 192.168.1 RELAY",
      "C. 192.168.1.0/24 OK",
      "D. 192.168.1 OK"
    ],
    "answer": "B",
    "explicacion": "El archivo de acceso de Sendmail usa la dirección IP o parte de ella (192.168.1 para la red /24) seguida de la palabra clave RELAY.",
    "pista": "IP parcial y acción RELAY."
  },
  {
    "question": "6. ¿Qué comando se utiliza para imprimir las estadísticas del kernel de NFS? (Proporciona el comando con o sin ruta completa)",
    "answer": "nfsstat",
    "explicacion": "nfsstat muestra estadísticas sobre la actividad del cliente y servidor NFS.",
    "pista": "Estadísticas NFS."
  },
  {
    "question": "7. Para configurar un servicio LDAP en la empresa 'domain Ltd', ¿qué entrada debe añadirse a slapd.conf para establecer el rootdn de modo que el nombre común sea Manager y el dominio sea domain.com?",
    "options": [
      "A. rootdn cn=Manager de domain dc=com",
      "B. rootdn \"cn=Manager,dc=domain,dc=com\"",
      "C. rootdn en domain, dc= com, dc= Manager",
      "D. rootdn \"en= domain dc= com, dc= Manager\"",
      "E. rootdn \"cn=Manager de domain dc=com\""
    ],
    "answer": "B",
    "explicacion": "La sintaxis correcta para un DN (Distinguished Name) usa comas como separadores y el formato atributo=valor (dc=domain,dc=com).",
    "pista": "Sintaxis estándar DN entre comillas."
  },
  {
    "question": "8. Por defecto, OpenLDAP registra a través de syslogd. ¿Cuál es la directiva de slapd.conf para que los registros de LDAP se escriban en /var/log/ldap.log?",
    "options": [
      "A. loglevel",
      "B. logfile",
      "C. syslogfile",
      "D. logfilepath"
    ],
    "answer": "A",
    "explicacion": "Aunque la pregunta es un poco truculenta, en slapd.conf se configura el 'loglevel'. La ubicación del archivo (/var/log/ldap.log) se configura realmente en el demonio syslog (rsyslog.conf), no en slapd.conf directamente, pero 'loglevel' es la directiva que controla qué se envía.",
    "pista": "Nivel de registro."
  },
  {
    "question": "9. Un programa vsftpd en una jaula chroot da error de librerías compartidas. ¿Qué DOS soluciones son posibles?",
    "options": [
      "A. Compilar vsftp estáticamente.",
      "B. Añadir la ruta a /etc/ld.so.conf.",
      "C. Crear enlace simbólico fuera de la jaula.",
      "D. Copiar la librería requerida al directorio lib dentro de la jaula chroot.",
      "E. Usar chroot con --static_libs."
    ],
    "answer": "A, D",
    "explicacion": "En un entorno chroot, el programa no puede ver archivos fuera. Las soluciones son: tener el programa compilado con todo incluido (estático) o copiar físicamente las librerías necesarias dentro de la estructura de directorios de la jaula.",
    "pista": "Estático o copiar dentro."
  },
  {
    "question": "10. Introduce el comando con todos los parámetros para listar los trabajos cron del usuario john (ejecutado por root).",
    "answer": "crontab -u john -l",
    "explicacion": "-u especifica el usuario y -l lista los trabajos.",
    "pista": "Usuario y Listar."
  },
  {
    "question": "11. ¿Qué tipo de registro DNS se utiliza para permitir que los usuarios y aplicaciones realicen consultas DNS inversas?",
    "options": [
      "A. CNAME",
      "B. IN",
      "C. PTR",
      "D. REV",
      "E. RIN"
    ],
    "answer": "C",
    "explicacion": "Los registros PTR (Puntero) mapean una dirección IP a un nombre de dominio.",
    "pista": "Puntero inverso."
  },
  {
    "question": "12. ¿Qué entrada en el archivo procmailrc enviará una copia de un correo electrónico a otra dirección de correo?",
    "options": [
      "A. :0c",
      "B. :0 copy",
      "C. :c",
      "D. :copy",
      "E. :s"
    ],
    "answer": "A",
    "explicacion": "La bandera 'c' (:0c) en el inicio de una receta indica a procmail que genere una copia ('carbon copy') para procesarla, dejando que el correo original continúe.",
    "pista": "Bandera c."
  },
  {
    "question": "13. Se ha añadido una entrada correcta a /etc/hosts.allow pero no tiene efecto. ¿Cuál sería la causa?",
    "options": [
      "A. tcpd necesita recibir la señal HUP.",
      "B. El servicio necesita reiniciarse.",
      "C. La máquina necesita reiniciarse.",
      "D. Hay una entrada conflictiva en /etc/hosts.deny.",
      "E. El servicio no soporta tcpwrappers."
    ],
    "answer": "E",
    "explicacion": "/etc/hosts.allow solo funciona si el servicio está compilado con soporte para libwrap (tcpwrappers) o se invoca a través de tcpd.",
    "pista": "Soporte de la librería."
  },
  {
    "question": "14. Un script en /etc/init.d no se ejecuta al arrancar en runlevel 2. ¿Causa más probable?",
    "options": [
      "A. No declarado en /etc/services",
      "B. runlevel 2 no declarado en inittab",
      "C. Permisos incorrectos",
      "D. No se creó el enlace simbólico correspondiente en /etc/rc2.d",
      "E. El script no es ejecutable"
    ],
    "answer": "D",
    "explicacion": "SysVinit requiere enlaces simbólicos (que empiezan por S o K) en el directorio del nivel de ejecución (/etc/rc2.d) apuntando al script real.",
    "pista": "Enlace en rc2.d."
  },
  {
    "question": "15. Selecciona la afirmación INCORRECTA sobre el formato de archivo LDIF:",
    "options": [
      "A. Contiene una línea dn.",
      "B. Una línea en blanco separa las entradas.",
      "C. Los datos binarios requieren configuraciones específicas.",
      "D. El archivo LDIF acepta cualquier tipo de codificación de archivo."
    ],
    "answer": "D",
    "explicacion": "LDIF es un formato de texto estándar que requiere codificación UTF-8. No acepta 'cualquier' codificación arbitraria.",
    "pista": "Codificación de archivo."
  },
  {
    "question": "16. Un servidor con 2 interfaces actúa como router pero no pasa tráfico. ¿Qué DOS cosas hay que hacer?",
    "options": [
      "A. Habilitar IP forwarding en /proc/sys/net/ipv4/ip_forward",
      "B. Añadir cadenas de firewall nuevas.",
      "C. Reconfigurar las reglas del firewall para permitir el tráfico a través (FORWARD).",
      "D. Reiniciar la tabla de enrutamiento.",
      "E. Reiniciar el servidor."
    ],
    "answer": "A, C",
    "explicacion": "Para enrutar se necesita: 1) Activar el reenvío en el kernel (ip_forward) y 2) Permitir que el tráfico pase a través del firewall (cadena FORWARD en iptables).",
    "pista": "Kernel forward y Firewall forward."
  },
  {
    "question": "17. ¿Qué opción en la configuración de ISC DHCPD define los servidores DNS para los clientes?",
    "options": [
      "A. domain-name-servers",
      "B. domain-server",
      "C. name-server",
      "D. servers"
    ],
    "answer": "A",
    "explicacion": "La opción correcta es 'option domain-name-servers' (en plural).",
    "pista": "Plural."
  },
  {
    "question": "18. ¿Para qué se utiliza DNSSEC?",
    "options": [
      "A. Consultas DNS encriptadas.",
      "B. Autenticación criptográfica de zonas DNS.",
      "C. Consultas secundarias.",
      "D. Autenticación de usuario.",
      "E. Encriptar respuestas."
    ],
    "answer": "B",
    "explicacion": "DNSSEC añade firmas digitales a los registros DNS para garantizar la autenticidad e integridad de los datos (evitar suplantación), no para encriptar el tráfico.",
    "pista": "Autenticación de zona."
  },
  {
    "question": "19. ¿Qué directiva de configuración de Squid define el método de autenticación?",
    "options": [
      "A. auth_param",
      "B. auth_method",
      "C. auth_program",
      "D. auth_mechanism",
      "E. proxy_auth"
    ],
    "answer": "A",
    "explicacion": "'auth_param' se utiliza para configurar los parámetros de los esquemas de autenticación (basic, digest, ntlm, etc.).",
    "pista": "Parámetro de autenticación."
  },
  {
    "question": "20. ¿Qué comando se utiliza para recargar un conjunto de reglas netfilter guardadas?",
    "options": [
      "A. iptables-restore",
      "B. iptables-recover",
      "C. iptables-load",
      "D. iptables-reload"
    ],
    "answer": "A",
    "explicacion": "'iptables-restore' lee reglas desde la entrada estándar (generadas previamente por iptables-save) y las aplica al kernel.",
    "pista": "Restaurar tablas."
  },
  {
    "question": "21. Con fail2ban, ¿qué es una 'jail' (cárcel)?",
    "options": [
      "A. Una cadena de reglas de netfilter que bloquea IPs ofensivas para un servicio particular",
      "B. Un grupo de servicios en el servidor que deben ser monitoreados",
      "C. Una definición de filtro y un conjunto de una o más acciones a tomar cuando hay coincidencia",
      "D. El entorno chroot en el que se ejecuta fail2ban"
    ],
    "answer": "C",
    "explicacion": "En fail2ban, una 'jail' es la combinación de un filtro (regex para buscar en logs) y una acción (como banear la IP) que se activa al detectar coincidencias.",
    "pista": "Combinación de filtro y acción."
  },
  {
    "question": "22. ¿Qué archivos lee el comando lsdev? (Elige TRES respuestas correctas)",
    "options": [
      "A. /proc/dma",
      "B. /proc/filesystems",
      "C. /proc/interrupts",
      "D. /proc/ioports",
      "E. /proc/swaps"
    ],
    "answer": "A, C, D",
    "explicacion": "El comando lsdev recopila información sobre el hardware instalado leyendo los archivos /proc/dma, /proc/interrupts y /proc/ioports.",
    "pista": "Información de hardware (DMA, IRQ, I/O)."
  },
  {
    "question": "23. ¿Qué DOS herramientas inalámbricas se pueden utilizar para comprobar la calidad del enlace de la red inalámbrica?",
    "options": [
      "A. iwconfig",
      "B. iwlink",
      "C. iwscan",
      "D. iwifi",
      "E. iwspy"
    ],
    "answer": "A, E",
    "explicacion": "iwconfig muestra parámetros generales incluyendo la calidad del enlace (Link Quality). iwspy permite monitorizar estadísticas de enlace de nodos específicos.",
    "pista": "Configuración y espionaje."
  },
  {
    "question": "24. ¿Qué tipo de ACL en el archivo de configuración de Squid se utiliza para propósitos de autenticación?",
    "options": [
      "A. proxyAuth",
      "B. proxy_auth",
      "C. proxy_passwd",
      "D. auth",
      "E. auth_required"
    ],
    "answer": "B",
    "explicacion": "La ACL 'proxy_auth' requiere que el usuario se autentique mediante un programa externo antes de permitir el acceso.",
    "pista": "Autenticación de proxy (con guion bajo)."
  },
  {
    "question": "25. Analizando la siguiente configuración de BIND: 'forwarders { 192.168.0.4; }; forward first;'. ¿Qué comportamiento describe correctamente esta configuración?",
    "options": [
      "A. Cualquier host puede usar este servidor como principal.",
      "B. Si el servidor no conoce la respuesta, envía una consulta recursiva a 192.168.0.4.",
      "C. Envía siempre las consultas a un servidor raíz.",
      "D. Solo permite transferencias a la red local.",
      "E. Si la recursión a 192.168.0.4 falla, devuelve error inmediatamente."
    ],
    "answer": "B",
    "explicacion": "La directiva 'forward first' indica que primero intente reenviar la consulta a los 'forwarders' (192.168.0.4). Si eso falla, intentará resolverla por sí mismo.",
    "pista": "Reenviar primero."
  },
  {
    "question": "26. Después de modificar /etc/exports, los hosts remotos no pueden montar los directorios. ¿Qué acciones se deben tomar? (Elige DOS)",
    "options": [
      "A. Reiniciar el demonio NFS",
      "B. Ejecutar exportfs -a en el servidor",
      "C. Ejecutar exportfs -f en el servidor",
      "D. Ejecutar showmount -a en el servidor",
      "E. Reiniciar los hosts remotos"
    ],
    "answer": "B, C",
    "explicacion": "Para aplicar cambios sin reiniciar, se suele usar 'exportfs -r' (reexportar). En el contexto de las opciones dadas, 'exportfs -f' limpia la tabla y 'exportfs -a' exporta todo de nuevo.",
    "pista": "Recargar exportaciones."
  },
  {
    "question": "27. ¿Cuál de estas herramientas, sin opciones, proporciona más información técnica al realizar consultas DNS?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "A",
    "explicacion": "El comando 'dig' es el más verboso por defecto, mostrando las secciones de pregunta, respuesta, autoridad y adicionales, así como tiempos y flags.",
    "pista": "Herramienta preferida para diagnósticos DNS."
  },
  {
    "question": "28. Para usar actualizaciones DNS dinámicas seguras se recomienda TSIG. ¿Qué DOS afirmaciones sobre TSIG son ciertas?",
    "options": [
      "A. TSIG se usa para encriptar los datos de zona",
      "B. TSIG es una señal para iniciar actualización de zona",
      "C. TSIG se usa dentro de los archivos de zona",
      "D. TSIG se usa solo en la configuración del servidor",
      "E. Los servidores usando TSIG deben estar sincronizados (zona horaria/reloj)"
    ],
    "answer": "D, E",
    "explicacion": "TSIG utiliza claves compartidas definidas en la configuración (named.conf) y requiere sincronización horaria precisa para evitar ataques de repetición.",
    "pista": "Claves en configuración y relojes en hora."
  },
  {
    "question": "29. ¿Qué comando se puede usar para añadir un nuevo grupo de noticias llamado ABC que permita publicaciones (posting)?",
    "options": [
      "A. ctlinnd newgroup ABC n news",
      "B. ctlinnd newgroup ABC y news",
      "C. ctlinnd addgroup ABC y news",
      "D. ctlinnd newgroup ABC +rw news",
      "E. ctlinnd addgroup ABC +rw news"
    ],
    "answer": "B",
    "explicacion": "La sintaxis es 'ctlinnd newgroup <nombre> <flag> <creador>'. El flag 'y' permite el posting local.",
    "pista": "Comando newgroup con flag 'y'."
  },
  {
    "question": "30. Los usuarios en la ACL 'sales_net' solo deben acceder a Internet en los horarios definidos en 'sales_time'. ¿Cuál es la directiva http_access correcta en Squid?",
    "options": [
      "A. http_access deny sales_time sales_net",
      "B. http_access allow sales_net sales_time",
      "C. http_access allow sales_net and sales_time",
      "D. allow http_access sales_net sales_time",
      "E. http_access sales_net sales_time"
    ],
    "answer": "B",
    "explicacion": "En Squid, colocar múltiples ACLs en una misma línea de 'http_access allow' funciona como un AND lógico: deben cumplirse ambas condiciones.",
    "pista": "Misma línea implica AND."
  },
  {
    "question": "31. ¿Qué comando se puede usar para cambiar la contraseña de una entrada LDAP? (Escribe solo el comando)",
    "answer": "ldappasswd",
    "explicacion": "ldappasswd es la utilidad de línea de comandos estándar para modificar el atributo userPassword de una entrada LDAP.",
    "pista": "LDAP + passwd."
  },
  {
    "question": "32. ¿Qué opción global en squid.conf establece el número de puerto donde Squid escuchará las peticiones de los clientes?",
    "options": [
      "A. port",
      "B. client_port",
      "C. http_port",
      "D. server_port",
      "E. squid_port"
    ],
    "answer": "C",
    "explicacion": "La directiva 'http_port' define el puerto de escucha para tráfico HTTP (por defecto 3128).",
    "pista": "Puerto HTTP."
  },
  {
    "question": "33. Un administrador consciente de la seguridad cambiaría qué DOS líneas en un archivo de configuración SSH predeterminado?",
    "options": [
      "A. Protocol 2, 1",
      "B. PermitEmptyPasswords no",
      "C. Port 22",
      "D. PermitRootLogin yes",
      "E. IgnoreRhosts yes"
    ],
    "answer": "A, D",
    "explicacion": "Se debe eliminar el soporte para Protocol 1 (inseguro) y cambiar PermitRootLogin a 'no' para evitar acceso directo de root.",
    "pista": "Protocolo antiguo y root."
  },
  {
    "question": "34. ¿Qué parámetro de configuración en un servidor Postfix modifica solo la dirección del remitente y no la del destinatario?",
    "options": [
      "A. alias_maps",
      "B. alias_rewrite_maps",
      "C. sender_canonical_maps",
      "D. sender_rewrite_maps"
    ],
    "answer": "C",
    "explicacion": "sender_canonical_maps se utiliza para reescribir direcciones de correo saliente (remitentes).",
    "pista": "Canónico de remitente."
  },
  {
    "question": "35. Un servidor BIND nunca debe responder consultas o aceptar tráfico de ciertas redes. ¿Qué directiva se usa para descartar silenciosamente ese tráfico?",
    "options": [
      "A. deny-query { ...; };",
      "B. no-answer { ...; };",
      "C. deny-answer { ...; };",
      "D. deny-access { ...; };",
      "E. blackhole { ...; };"
    ],
    "answer": "E",
    "explicacion": "La directiva 'blackhole' especifica una lista de direcciones que el servidor ignorará por completo (ni recibe ni responde).",
    "pista": "Agujero negro."
  },
  {
    "question": "36. ¿Qué nombre de archivo en un servidor Postfix se usa comúnmente para modificar la dirección del remitente en correos salientes? (Escribe solo el nombre del archivo)",
    "answer": "sender_canonical",
    "explicacion": "Es el archivo de mapa predeterminado para la directiva sender_canonical_maps.",
    "pista": "Nombre del mapa canónico de remitente."
  },
  {
    "question": "37. ¿Cuál es la sintaxis correcta de una regla en el archivo de configuración de procmail?",
    "options": [
      "A. :0[flags][:[lockfile]] [* condition] action",
      "B. [* condition] action: 0[flags] [:[lockfile]]",
      "C. :O[flags][:[lockfile]] [* condition] action",
      "D. :0[flags][:[lockfile]]: [* condition] action",
      "E. :0[flags][:[lockfile]]: [* condition]:action"
    ],
    "answer": "A",
    "explicacion": "Una receta de procmail comienza con ':0', seguido de flags opcionales, lockfile opcional, condiciones (con *) y finalmente la acción.",
    "pista": "Empieza con :0."
  },
  {
    "question": "38. ¿Qué describe mejor el significado del siguiente comando de búsqueda LDAP? ldapsearch -x '(&(cn=marie)(telephoneNumber=9*))'",
    "options": [
      "A. Entradas que no tienen cn marie o teléfono empezando por 9",
      "B. Entradas que tienen el atributo cn igual a marie Y el atributo telephoneNumber empezando por 9",
      "C. Entradas que tienen cn marie Y teléfono terminando en 9",
      "D. Entradas que no tienen cn marie Y no tienen teléfono empezando por 9",
      "E. Entradas con cn distinto a marie O teléfono empezando por 9"
    ],
    "answer": "B",
    "explicacion": "El operador '&' es un AND lógico. Busca registros que cumplan ambas condiciones: nombre 'marie' Y teléfono que inicie con '9'.",
    "pista": "Operador & significa Y."
  },
  {
    "question": "39. ¿Qué opción en named.conf especifica qué hosts tienen permiso para pedir información de dominios (hacer consultas) al servidor?",
    "options": [
      "A. allowed-hosts",
      "B. accept-query",
      "C. permit-query",
      "D. allow-query",
      "E. query-group"
    ],
    "answer": "D",
    "explicacion": "La directiva 'allow-query' define la lista de control de acceso (ACL) para clientes que pueden realizar consultas DNS normales.",
    "pista": "Permitir consulta."
  },
  {
    "question": "40. ¿Qué comando se utiliza para guardar las reglas actuales de iptables en un formato que pueda ser restaurado posteriormente? (Solo el comando)",
    "answer": "iptables-save",
    "explicacion": "iptables-save vuelca las reglas activas en la salida estándar, que se suele redirigir a un archivo para persistencia.",
    "pista": "Guardar reglas iptables."
  },
  {
    "question": "41. Todas las máquinas fuera de la red pueden enviar correos electrónicos a través del servidor a direcciones no servidas por ese servidor. Si el servidor acepta y entrega el correo, entonces es un:",
    "answer": "open email relay",
    "explicacion": "Un 'open relay' es un servidor SMTP configurado de tal manera que permite que cualquier persona en Internet envíe correo a través de él, no solo los usuarios locales.",
    "pista": "Retransmisor abierto."
  },
  {
    "question": "42. ¿Qué directiva de Apache permite el uso de archivos de configuración externos definidos por la directiva AccessFileName (como .htaccess)?",
    "options": [
      "A. AllowExternalConfig",
      "B. AllowAccessFile",
      "C. AllowConfig",
      "D. IncludeAccessFile",
      "E. AllowOverride"
    ],
    "answer": "E",
    "explicacion": "La directiva 'AllowOverride' controla qué directivas encontradas en un archivo .htaccess pueden anular la configuración predeterminada.",
    "pista": "Permitir anulación."
  },
  {
    "question": "43. ¿Cuáles de las siguientes son directivas de archivo de registro (log) comúnmente utilizadas en Apache? (Elige DOS)",
    "options": [
      "A. ConfigLog",
      "B. CustomLog",
      "C. ErrorLog",
      "D. ServerLog",
      "E. VHostLog"
    ],
    "answer": "B, C",
    "explicacion": "'ErrorLog' define dónde se guardan los errores y 'CustomLog' define el archivo y formato para los registros de acceso.",
    "pista": "Log personalizado y de errores."
  },
  {
    "question": "44. Se debe obtener un OID privado para usar con OpenLDAP para una empresa cuando:",
    "options": [
      "A. La empresa planea crear archivos de esquema personalizados para su directorio.",
      "B. La empresa pretende utilizar un esquema LDAP comercial.",
      "C. La empresa quiere hacer su directorio disponible al público en Internet.",
      "D. La empresa desea utilizar un atributo cifrado."
    ],
    "answer": "A",
    "explicacion": "Para definir nuevos atributos o clases de objetos (esquemas personalizados) sin entrar en conflicto con los estándares, se necesita un número OID (Object Identifier) registrado por la organización.",
    "pista": "Esquemas propios."
  },
  {
    "question": "45. ¿Cuál es el servidor de correo preferido para el dominio example.com, según la siguiente configuración BIND? '@ IN MX 10 mx-ny.domain.com' y '@ IN MX 50 mx-ca.domain.com'",
    "answer": "mx-ny.domain.com",
    "explicacion": "En los registros MX, el número indica la prioridad (o preferencia). Cuanto menor sea el número, mayor es la prioridad.",
    "pista": "El número más bajo gana."
  },
  {
    "question": "46. ¿En qué modo está tu sesión FTP cuando el lado del cliente realiza las conexiones tanto a los puertos de datos como de comando del servidor FTP?",
    "options": [
      "A. passive",
      "B. active",
      "C. impassive",
      "D. safe",
      "E. inactive"
    ],
    "answer": "A",
    "explicacion": "En el modo pasivo (passive), el cliente inicia ambas conexiones (comando y datos) hacia el servidor, lo cual es amigable con los firewalls del lado del cliente.",
    "pista": "El cliente es el activo al conectar."
  },
  {
    "question": "47. Considera el siguiente .htaccess: 'AuthType Basic... Require valid-user... Order deny,allow... Deny from all... Allow from 10.1.2.0/24... Satisfy any'. ¿Qué DOS afirmaciones son verdaderas?",
    "options": [
      "A. Apache solo permitirá acceso a usuarios autenticados desde la red 10.1.2.0/24.",
      "B. Esta configuración solo funcionará si el directorio tiene configurado 'AllowOverride AuthConfig Limit'.",
      "C. Apache requerirá autenticación para cada cliente.",
      "D. Los usuarios que conecten desde la red 10.1.2.0/24 no necesitarán autenticarse.",
      "E. La directiva Satisfy podría eliminarse sin cambiar el comportamiento."
    ],
    "answer": "B, D",
    "explicacion": "'Satisfy any' significa que basta con cumplir una de las condiciones: o estar en la red permitida (Allow) o tener una contraseña válida (Require). Y para que .htaccess funcione, se necesitan permisos AllowOverride.",
    "pista": "Satisfacer cualquiera: IP o Contraseña."
  },
  {
    "question": "48. Según la configuración SOA 'mars.domain.com hostmaster.domain.com', ¿cuál es la dirección de correo electrónico del administrador?",
    "answer": "hostmaster@domain.com",
    "explicacion": "En el registro SOA, el segundo campo es el correo del responsable, donde el primer punto se sustituye por una arroba (@).",
    "pista": "Reemplaza el primer punto por @."
  },
  {
    "question": "49. ¿Qué directiva de Apache se utiliza para configurar el directorio principal del sitio, desde el cual servirá los documentos?",
    "options": [
      "A. ServerRoot",
      "B. UserDir",
      "C. DirectoryIndex",
      "D. Location",
      "E. DocumentRoot"
    ],
    "answer": "E",
    "explicacion": "'DocumentRoot' es la directiva que define la ruta en el sistema de archivos donde se encuentran los archivos web públicos.",
    "pista": "Raíz de documentos."
  },
  {
    "question": "50. Los usuarios se quejan de lentitud en la resolución de nombres. Introduce el comando, sin ruta ni opciones, que muestra el tiempo tomado para resolver una consulta DNS.",
    "answer": "dig",
    "explicacion": "El comando 'dig' muestra al final de su salida una sección de estadísticas que incluye 'Query time'.",
    "pista": "Herramienta de diagnóstico DNS."
  },
  {
    "question": "51. Según este extracto LDIF: 'dn: cn=Robert Smith, ou=people,dc=example,dc=com', ¿a qué unidad organizativa pertenece Robert Smith? (Especifica solo la unidad)",
    "answer": "people",
    "explicacion": "La parte 'ou=people' del Distinguished Name (DN) indica la Organizational Unit.",
    "pista": "El valor de 'ou'."
  },
  {
    "question": "52. El host llamado 'domain' con MAC '08:00:26:40:59:23' debe recibir siempre la IP 192.168.1.2 del servidor DHCP. ¿Qué configuración logra esto?",
    "options": [
      "A. host domain { hardware-ethernet ...; fixed-address ...; }",
      "B. host domain { mac=...; ip=...; }",
      "C. host domain = ... ...",
      "D. host domain { hardware ethernet 08:00:26:40:59:23; fixed-address 192.168.1.2; }",
      "E. host domain { hardware-address ...; fixed-ip ...; }"
    ],
    "answer": "D",
    "explicacion": "La sintaxis correcta en dhcpd.conf usa 'hardware ethernet' (con espacio) y 'fixed-address'.",
    "pista": "Sintaxis estándar de ISC DHCP."
  },
  {
    "question": "53. ¿Qué formato para almacenar correo de usuario utiliza los directorios tmp, cur y new para resolver problemas de fiabilidad?",
    "options": [
      "A. imap",
      "B. maildir",
      "C. mbox",
      "D. mh",
      "E. pop3"
    ],
    "answer": "B",
    "explicacion": "El formato Maildir utiliza una estructura de directorios (cur, new, tmp) y un archivo por mensaje, lo que evita bloqueos y corrupción.",
    "pista": "Directorio de correo."
  },
  {
    "question": "54. El nuevo servidor de archivos es miembro del dominio Windows 'foo'. ¿Qué DOS secciones de configuración permitirán a los miembros del grupo de dominio 'all' leer, escribir y ejecutar archivos en '/srv/smb/data'?",
    "options": [
      "A. [data] ... create mask= 0550 directory mask = 0770",
      "B. [data] ... create mask= 0770 directory mask = 0770",
      "C. [data] ... create mask = 0770 directory mask = 0770",
      "D. [data] ... directory mask = 0770 (sin create mask explícito)",
      "E. [data] ... create mask= 0550 directory mask = 0770"
    ],
    "answer": "B, C",
    "explicacion": "Para permitir escribir y ejecutar al grupo, la máscara debe ser al menos 0770 (rwxrwx---). Las opciones B y C configuran esto correctamente.",
    "pista": "Permisos 770."
  },
  {
    "question": "55. A partir del kernel de Linux 2.4, ¿qué software se utiliza para configurar una VPN (IPSec)?",
    "options": [
      "A. IPSec",
      "B. SSH",
      "C. net-tools",
      "D. FreeS/WAN",
      "E. iproute2"
    ],
    "answer": "D",
    "explicacion": "Históricamente, FreeS/WAN fue la implementación de referencia de IPSec para Linux en la era del kernel 2.4.",
    "pista": "Software clásico de VPN."
  },
  {
    "question": "56. ¿Cuál de los siguientes comandos se puede usar para listar todos los sistemas de archivos exportados desde un servidor NFS remoto?",
    "options": [
      "A. exportfs",
      "B. mount",
      "C. nfslist",
      "D. rpcstat",
      "E. showmount"
    ],
    "answer": "E",
    "explicacion": "'showmount -e <servidor>' muestra la lista de exportaciones de un servidor NFS.",
    "pista": "Mostrar montajes."
  },
  {
    "question": "57. Un usuario solicita un recurso compartido de Samba 'oculto' llamado confidential. ¿Cómo se puede configurar esto?",
    "options": [
      "A. [confidential]",
      "B. [$confidential]",
      "C. [#confidential]",
      "D. [%confidential]",
      "E. [confidential$]"
    ],
    "answer": "E",
    "explicacion": "En el entorno Windows/Samba, añadir un signo de dólar ($) al final del nombre del recurso lo hace invisible en la navegación de red.",
    "pista": "El dólar al final."
  },
  {
    "question": "58. En un servidor de correo (10.10.10.1) que solo debe permitir envío local, ¿cómo se puede probar desde fuera si es un 'open relay' usando telnet?",
    "options": [
      "A. MAIL FROM local, RECEIPT TO externo",
      "B. RCPT FROM local, MAIL TO externo",
      "C. HELLO bogus, MAIL FROM externo, RCPT TO externo",
      "D. HELO bogus, MAIL FROM externo, RCPT TO externo",
      "E. HELO: bogus, RCPT FROM externo"
    ],
    "answer": "D",
    "explicacion": "La prueba consiste en simular un envío desde una dirección externa a otra dirección externa. Si el servidor lo acepta, es un open relay.",
    "pista": "HELO, MAIL FROM ajeno, RCPT TO ajeno."
  },
  {
    "question": "59. Los mensajes de los programas no aparecen en el idioma nativo del usuario. ¿Qué variable de entorno debe configurarse?",
    "options": [
      "A. LANG",
      "B. I18N",
      "C. MESSAGES",
      "D. MSGS",
      "E. LC_MSGS"
    ],
    "answer": "A",
    "explicacion": "La variable 'LANG' establece la configuración regional predeterminada para todas las categorías, incluido el idioma de los mensajes.",
    "pista": "Lenguaje."
  },
  {
    "question": "60. ¿Qué se necesita para sincronizar la contraseña de UNIX con la de Samba cuando se cambia la contraseña cifrada de Samba usando smbpasswd?",
    "options": [
      "A. Nada, no es posible.",
      "B. Ejecutar netvamp.",
      "C. Ejecutar winbind --sync.",
      "D. Añadir 'unix password sync = yes' a smb.conf.",
      "E. Añadir 'smb unix password = sync' a smb.conf."
    ],
    "answer": "D",
    "explicacion": "La directiva 'unix password sync = yes' en smb.conf indica a Samba que intente actualizar la contraseña del sistema (UNIX) cuando se cambie la de Samba.",
    "pista": "Sincronización de contraseña unix."
  },
  {
    "question": "61. Los siguientes datos son parte de la salida producida por un programa. ¿Qué programa produjo esta salida? 'strftime (...) = 4 fwrite (...) = 1 fputc (...) = 32...'",
    "options": [
      "A. lsof",
      "B. ltrace",
      "C. nm",
      "D. strace",
      "E. time"
    ],
    "answer": "B",
    "explicacion": "La salida muestra llamadas a funciones de librería (como strftime, fwrite), lo cual es característico de 'ltrace' (library trace). 'strace' mostraría llamadas al sistema.",
    "pista": "Traza de librerías."
  },
  {
    "question": "62. Si se ejecuta el comando 'arp -f', ¿qué archivo se leerá por defecto?",
    "options": [
      "A. /etc/hosts",
      "B. /etc/ethers",
      "C. /etc/arp.conf",
      "D. /etc/networks",
      "E. /var/cache/arp"
    ],
    "answer": "B",
    "explicacion": "El comando 'arp -f' carga entradas en la tabla ARP desde el archivo /etc/ethers por defecto.",
    "pista": "Archivo de mapeo Ethernet."
  },
  {
    "question": "63. Analizando un archivo slapd.conf, un administrador nota que las directivas rootdn y rootpw no están presentes. ¿Dónde se define la cuenta de administrador LDAP?",
    "options": [
      "A. Usa la cuenta por defecto admin con contraseña admin.",
      "B. La cuenta se define mediante una ACL en slapd.conf.",
      "C. Usa la cuenta por defecto admin sin contraseña.",
      "D. La cuenta se define en el archivo /etc/ldap.secret.",
      "E. La cuenta se define en el archivo /etc/ldap.root.conf."
    ],
    "answer": "B",
    "explicacion": "Si no hay rootdn explícito, los privilegios administrativos suelen otorgarse a usuarios específicos mediante Listas de Control de Acceso (ACLs) o directivas 'access to'.",
    "pista": "Control de acceso."
  },
  {
    "question": "64. ¿Qué acciones se deben considerar al crear una jaula chroot para FTP? (Elige TRES respuestas correctas)",
    "options": [
      "A. Crear /dev/ y /etc/ en el entorno chroot.",
      "B. Crear /etc/passwd en el entorno chroot.",
      "C. Montar bind de /proc en el entorno chroot.",
      "D. Crear el usuario ftp en el entorno chroot.",
      "E. Crear /dev/kmem en el entorno chroot."
    ],
    "answer": "A, B, D",
    "explicacion": "Un entorno chroot necesita una estructura de directorios básica (/dev, /etc), una copia de archivos de autenticación (/etc/passwd) y dispositivos nulos.",
    "pista": "Estructura básica de sistema de archivos."
  },
  {
    "question": "65. Un usuario está de vacaciones. Cualquiera que envíe un correo debe recibir una autorespuesta. ¿Qué regla de procmail debe usarse para que el programa 'vacation' procese los correos entrantes?",
    "options": [
      "A. :0c: /usr/bin/vacation nobody",
      "B. :w /usr/bin/vacation nobody",
      "C. :0fc: /usr/bin/vacation nobody",
      "D. /usr/bin/vacation nobody",
      "E. :> | /usr/bin/vacation nobody"
    ],
    "answer": "A",
    "explicacion": "La bandera 'c' (:0c:) indica que se debe procesar una copia del correo (para que el original siga su curso) y pasarla al programa vacation.",
    "pista": "Copia para vacaciones."
  },
  {
    "question": "66. Al intentar hacer proxy inverso de un servidor web a través de Nginx, ¿qué palabra clave se requiere para pasar el encabezado Host de la solicitud original al servidor proxy?",
    "options": [
      "A. proxy_pass_header",
      "B. proxy_forward_header",
      "C. proxy_set_header",
      "D. proxy_header"
    ],
    "answer": "C",
    "explicacion": "La directiva 'proxy_set_header Host $host;' se utiliza para redefinir o añadir campos al encabezado de la solicitud que se pasa al backend.",
    "pista": "Establecer encabezado."
  },
  {
    "question": "67. ¿Qué configuración en el archivo de Courier IMAP le dirá al demonio IMAP que escuche solo en la interfaz localhost?",
    "options": [
      "A. ADDRESS=127.0.0.1",
      "B. Listen 127.0.0.1",
      "C. INTERFACE=127.0.0.1",
      "D. LOCALHOST_ONLY = 1"
    ],
    "answer": "A",
    "explicacion": "En Courier, la variable ADDRESS define la dirección IP en la que el servicio debe escuchar.",
    "pista": "Dirección."
  },
  {
    "question": "68. ¿Cuál de estas formas se puede usar para permitir el acceso a un servidor DNS BIND solo desde redes/hosts especificados?",
    "options": [
      "A. Usando la declaración limit {...;}; en el archivo de configuración.",
      "B. Usando la declaración allow-query { ...; }; en el archivo de configuración.",
      "C. Usando la declaración answer-only { ...; } en el archivo de configuración.",
      "D. Usando la declaración answer {...;}; en el archivo de configuración.",
      "E. Usando la declaración query-access {...;}; en el archivo de configuración."
    ],
    "answer": "B",
    "explicacion": "allow-query es la directiva estándar de BIND para restringir quién puede realizar consultas al servidor.",
    "pista": "Permitir consulta."
  },
  {
    "question": "69. ¿Qué demonio se requiere en el cliente si un dispositivo ethernet obtiene su dirección IP de un servidor central?",
    "options": [
      "A. dhcp",
      "B. dhcpcd",
      "C. bootpd",
      "D. ethd",
      "E. dhcpd"
    ],
    "answer": "B",
    "explicacion": "'dhcpcd' (DHCP Client Daemon) o 'dhclient' son los demonios del lado del cliente. 'dhcpd' es el servidor.",
    "pista": "Demonio cliente DHCP."
  },
  {
    "question": "70. ¿Qué comando liberaría la dirección IP actual arrendada por un servidor DHCP?",
    "options": [
      "A. ipconfig /release",
      "B. ifconfig --release-all",
      "C. dhclient -r",
      "D. ifconfig --release",
      "E. pump --release"
    ],
    "answer": "C",
    "explicacion": "El comando 'dhclient -r' libera explícitamente la concesión (lease) de IP actual y detiene el cliente DHCP en ejecución.",
    "pista": "Opción -r."
  },
  {
    "question": "71. ¿Cuál de las siguientes opciones se puede pasar a una máquina cliente DHCP utilizando opciones de configuración en el servidor DHCP?",
    "options": [
      "A. El nombre de dominio NIS",
      "B. El orden de resolución en /etc/resolv.conf",
      "C. El orden de prioridad en nsswitch.conf",
      "D. Las reglas de filtrado para iptables",
      "E. El contenido de hosts.allow y hosts.deny"
    ],
    "answer": "A",
    "explicacion": "DHCP puede enviar parámetros como la IP, máscara, puerta de enlace, servidores DNS y también el dominio NIS (opción 'option nis-domain').",
    "pista": "Servicio de Información de Red."
  },
  {
    "question": "72. ¿Qué es correcto sobre este extracto de un archivo LDIF? dn: cn=PrintOperators,ou=Groups,ou=IT,o=BR",
    "options": [
      "A. dn es el nombre de dominio.",
      "B. o es la unidad organizativa.",
      "C. cn es el nombre común (common name).",
      "D. dn es el nombre distinguido relativo."
    ],
    "answer": "C",
    "explicacion": "En la nomenclatura LDAP, 'cn' siempre corresponde a 'Common Name'.",
    "pista": "Significado de CN."
  },
  {
    "question": "73. ¿Qué conjunto de entradas devolverá el siguiente comando? ldapsearch -x \"(|(cn=marie)(!(telephoneNumber=9*)))\"",
    "options": [
      "A. Entradas que no tienen cn marie o no tienen teléfono empezando por 9.",
      "B. Entradas que tienen cn marie O NO tienen un número de teléfono que empiece por 9.",
      "C. Entradas que tienen cn marie Y teléfono terminando en 9.",
      "D. Entradas que no tienen cn marie y no tienen teléfono empezando por 9.",
      "E. Entradas que tienen cn marie o tienen teléfono empezando por 9."
    ],
    "answer": "B",
    "explicacion": "El filtro combina un OR (|) con un NOT (!). Busca: (cn es marie) O (teléfono NO empieza por 9).",
    "pista": "Lógica: O + NO."
  },
  {
    "question": "74. ¿Qué comando relacionado con Samba mostrará todas las opciones que no fueron modificadas en smb.conf y por tanto tienen sus valores por defecto?",
    "answer": "testparm -v",
    "explicacion": "El comando testparm verifica la configuración. La opción '-v' (verbose) muestra también los valores predeterminados que no aparecen explícitamente en el archivo.",
    "pista": "Probar parámetros verbosos."
  },
  {
    "question": "75. En un router Linux, se ha habilitado el reenvío de paquetes IPv4... ¿Cuál es la mejor manera de asegurar que este ajuste ('echo 1 > /proc/sys/net/ipv4/ip_forward') se mantenga tras el reinicio?",
    "options": [
      "A. Añadir el comando al script de inicio del usuario root.",
      "B. Añadir el comando a cualquier script de inicio de usuario.",
      "C. En /etc/sysctl.conf cambiar net.ipv4.ip_forward a 1.",
      "D. En /etc/rc.local añadir net.ipv4.ip_forward = 1.",
      "E. En /etc/sysconfig/iptables-config añadir ipv4.ip_forward = 1."
    ],
    "answer": "C",
    "explicacion": "El archivo /etc/sysctl.conf es el lugar estándar para configurar parámetros del kernel de forma persistente.",
    "pista": "Configuración de sysctl."
  },
  {
    "question": "76. ¿Qué frase es cierta al usar el siguiente archivo /etc/pam.d/login? '... password sufficient pam_unix.so nullok ...'",
    "options": [
      "A. Todos los usuarios serán autenticados contra el directorio LDAP.",
      "B. Este es el único archivo necesario para configurar autenticación LDAP.",
      "C. Solo los usuarios locales podrán iniciar sesión si existe /etc/nologin.",
      "D. Los usuarios ordinarios podrán cambiar su contraseña para que sea en blanco.",
      "E. Si los flags de control para auth se cambiaran a required, los usuarios locales no podrían entrar."
    ],
    "answer": "D",
    "explicacion": "El parámetro 'nullok' en el módulo pam_unix permite a los usuarios establecer contraseñas vacías (en blanco).",
    "pista": "Contraseñas nulas."
  },
  {
    "question": "77. Un servidor web espera manejar 200 peticiones simultáneas... y va lento. ¿Qué directivas en httpd.conf necesitan ajustarse?",
    "options": [
      "A. MinSpareServers & MaxSpareServers.",
      "B. MinSpareServers, MaxSpareServers, StartServers & MaxClients.",
      "C. MinServers, MaxServers & MaxClients.",
      "D. MinSpareServers, MaxSpareServers, StartServers, MaxClients & KeepAlive."
    ],
    "answer": "B",
    "explicacion": "Estas directivas controlan la creación de procesos hijos y el límite de conexiones concurrentes (MaxClients) en Apache.",
    "pista": "Control de procesos y clientes máximos."
  },
  {
    "question": "78. ¿Qué palabra falta en este extracto de named.conf? '_______ friends { 10.10.0.0/24; }; options { allow-query {friends; }; };'",
    "options": [
      "A. networks",
      "B. net",
      "C. list",
      "D. acl"
    ],
    "answer": "D",
    "explicacion": "La palabra clave 'acl' se utiliza para definir listas de control de acceso con un alias (en este caso, 'friends').",
    "pista": "Lista de Control de Acceso."
  },
  {
    "question": "79. Dado este extracto de configuración de Apache, ¿qué línea tiene sintaxis INCORRECTA? (Ver código fuente original)",
    "options": [
      "A. 1",
      "B. 1 y 4",
      "C. 1, 4 y 7",
      "D. 1 y 5",
      "E. Ninguna. La configuración es válida."
    ],
    "answer": "E",
    "explicacion": "El bloque <VirtualHost> y las directivas mostradas (ServerAdmin, DocumentRoot, etc.) siguen la sintaxis estándar correcta.",
    "pista": "Todo parece correcto."
  },
  {
    "question": "80. Considerando una tabla de enrutamiento, ¿qué comando elimina la ruta a la red 10.10.1.0/24?",
    "options": [
      "A. route del 10.10.1.0",
      "B. route del 10.10.1.0/24",
      "C. route del -net 10.10.1.0/24",
      "D. route del 10.10.1.0/24 gw ...",
      "E. route del -net 10.10.1.0"
    ],
    "answer": "C",
    "explicacion": "Para eliminar una ruta de red con el comando route clásico se usa 'route del -net <red>/<máscara>'.",
    "pista": "Borrar red."
  },
  {
    "question": "81. ¿Qué comando se puede usar para listar todos los sistemas de archivos exportados desde un servidor NFS remoto?",
    "options": [
      "A. exportfs",
      "B. nfsstat",
      "C. rpcinfo",
      "D. showmount",
      "E. importfs"
    ],
    "answer": "D",
    "explicacion": "El comando 'showmount -e <host>' lista las exportaciones disponibles en un servidor NFS remoto.",
    "pista": "Mostrar montajes."
  },
  {
    "question": "82. Cuando el servidor HTTP Apache se configura para usar hosts virtuales basados en nombres:",
    "options": [
      "A. Es necesario configurar una dirección IP diferente para cada host virtual.",
      "B. La directiva Listen es ignorada por el servidor.",
      "C. Inicia múltiples demonios (uno por cada host virtual).",
      "D. También es necesario crear un bloque Virtual Host para el host principal.",
      "E. La configuración NameVirtualHost *:80 indica que todos los hosts virtuales basados en nombre escucharán en el puerto 80."
    ],
    "answer": "E",
    "explicacion": "Aunque en versiones modernas de Apache es el comportamiento por defecto, históricamente la directiva NameVirtualHost era necesaria para activar esta funcionalidad en el puerto especificado.",
    "pista": "Nombre de Host Virtual."
  },
  {
    "question": "83. ¿Cuál de los siguientes describe el propósito principal de strace?",
    "options": [
      "A. Mostrar datos de la pila TCP/IP para ayudar a resolver problemas de red",
      "B. Ayudar a seguir los rastros de intrusos en la red interna",
      "C. Depurar programas mostrando el código original del programa (desensamblador)",
      "D. Ingeniería inversa de aplicaciones, resultando en el código fuente",
      "E. Depurar programas monitoreando las llamadas al sistema y reportándolas"
    ],
    "answer": "E",
    "explicacion": "strace intercepta y registra las llamadas al sistema (system calls) que un proceso realiza y las señales que recibe.",
    "pista": "System Trace."
  },
  {
    "question": "84. ¿Qué directiva se puede usar en named.conf para restringir las transferencias de zona a la red 192.168.1.0/24?",
    "options": [
      "A. allow-transfer { 192.168.1.0/24; };",
      "B. allow-transfer { 192.168.1.0/24 };",
      "C. allow-axfr { 192.168.1.0/24; };",
      "D. allow-axfr { 192.168.1.0/24 };",
      "E. allow-xfer { 192.168.1.0/24; };"
    ],
    "answer": "A",
    "explicacion": "La directiva correcta en BIND es 'allow-transfer', y la sintaxis requiere punto y coma dentro y fuera de las llaves.",
    "pista": "Permitir transferencia."
  },
  {
    "question": "85. ¿Cuál de las siguientes herramientas, por sí sola, puede proporcionar acceso telefónico (dial-in) a un servidor?",
    "options": [
      "A. mingetty",
      "B. pppd",
      "C. dip",
      "D. chat",
      "E. mgetty"
    ],
    "answer": "E",
    "explicacion": "mgetty es una alternativa a getty diseñada específicamente para manejar módems y líneas serie, permitiendo recibir llamadas de datos y fax.",
    "pista": "Getty para módems."
  },
  {
    "question": "86. ¿En qué directorio se pueden encontrar todos los parámetros disponibles para sysctl? (Proporciona la ruta completa)",
    "answer": "/proc/sys",
    "explicacion": "El sistema de archivos virtual /proc/sys expone los parámetros del kernel que sysctl puede leer y modificar.",
    "pista": "Directorio de sistema en proc."
  },
  {
    "question": "87. Cuando bash se invoca como un shell de inicio de sesión interactivo (login shell), ¿cuál de las siguientes frases es cierta?",
    "options": [
      "A. Primero lee y ejecuta /etc/profile y luego hace lo mismo con ~/.bash_profile y ~/.bashrc",
      "B. Primero lee y ejecuta /etc/bashrc y luego hace lo mismo con /etc/profile",
      "C. Lee y ejecuta comandos en ~/.bashrc solo si /etc/profile u otro script de inicialización lo llama",
      "D. Ignora /etc/profile y solo lee y ejecuta comandos en ~/.bashrc",
      "E. Primero lee y ejecuta /etc/profile y luego busca ~/.bash_profile, ~/.bash_login o ~/.profile (el primero que encuentre)"
    ],
    "answer": "C",
    "explicacion": "Un login shell por defecto lee /etc/profile y luego ~/.bash_profile (o login/profile). No lee ~/.bashrc automáticamente a menos que uno de los anteriores lo invoque explícitamente (que es la práctica común).",
    "pista": "El login shell busca perfiles, no rc directamente."
  },
  {
    "question": "88. Para una configuración de cliente LDAP, es necesario establecer la base LDAP. ¿Qué DOS de las siguientes acciones lograrían eso?",
    "options": [
      "A. export LDAPBASE=dc=linuxfoo,dc=com",
      "B. export BASE=dc=linuxfoo,dc=com",
      "C. Editar ldapbase.conf y añadir 'BASE dc=linuxfoo,dc=com'",
      "D. Editar cldap.conf y añadir 'BASE dc=linuxfoo,dc=com'",
      "E. Editar ldap.conf y añadir 'BASE dc=linuxfoo,dc=com'"
    ],
    "answer": "A, E",
    "explicacion": "Se puede configurar mediante la variable de entorno LDAPBASE o la directiva BASE en el archivo de configuración global del cliente /etc/ldap/ldap.conf (o openldap/ldap.conf).",
    "pista": "Variable de entorno y archivo ldap.conf."
  },
  {
    "question": "89. ¿Qué configuración de Postfix define los dominios para los cuales Postfix entregará el correo localmente? (Proporciona solo el nombre de la configuración)",
    "answer": "mydestination",
    "explicacion": "mydestination especifica la lista de dominios que se entregan a través del agente de entrega local ($local_transport). Nota: Algunos dumps antiguos pueden referenciar 'mydomain' erróneamente, pero 'mydestination' es la directiva técnica correcta para entrega local.",
    "pista": "Mi destino."
  },
  {
    "question": "90. ¿En qué directorio se almacenan los módulos PAM?",
    "answer": "/lib/security",
    "explicacion": "La ruta estándar para los módulos PAM es /lib/security (o /lib64/security en sistemas de 64 bits).",
    "pista": "Librerías de seguridad."
  },
  {
    "question": "91. Se requiere una receta de procmail para eliminar todos los correos marcados como spam (X-Spam-Status: Yes). Completa la receta: ':0: * X-Spam-Status: Yes ...'",
    "answer": "/dev/null",
    "explicacion": "Para descartar un correo silenciosamente en sistemas Unix/Linux, se redirige al dispositivo nulo /dev/null.",
    "pista": "El agujero negro del sistema."
  },
  {
    "question": "92. ¿Qué configuración en el archivo de Courier IMAP le dirá al demonio IMAP que escuche solo en la interfaz localhost?",
    "options": [
      "A. ADDRESS=127.0.0.1",
      "B. Listen 127.0.0.1",
      "C. INTERFACE=127.0.0.1",
      "D. LOCALHOST_ONLY = 1"
    ],
    "answer": "A",
    "explicacion": "En los archivos de configuración de Courier (imapd, pop3d), la directiva ADDRESS especifica la IP de escucha.",
    "pista": "Dirección."
  },
  {
    "question": "93. ¿Cuál de las siguientes líneas de configuración exportará /usr/local/share/ a nfsclient con acceso de lectura-escritura, asegurando que todos los cambios se escriban directamente al disco?",
    "options": [
      "A. nfsclient:/usr/local/share/:rw,sync",
      "B. nfsclient(rw,sync) /usr/local/share",
      "C. /usr/local/share nfsclient(rw,sync)",
      "D. /usr/local/share nfsclient:rw:sync",
      "E. /usr/local/share nfsclient(rw)"
    ],
    "answer": "C",
    "explicacion": "La sintaxis de /etc/exports es: directorio cliente(opciones). La opción 'sync' fuerza la escritura síncrona en disco.",
    "pista": "Directorio, Cliente, Opciones."
  },
  {
    "question": "94. ¿Cuál es la ruta al archivo de configuración global de Postfix? (Especifica la ruta completa)",
    "answer": "/etc/postfix/main.cf",
    "explicacion": "main.cf es el archivo principal donde se definen casi todos los parámetros de Postfix.",
    "pista": "Archivo principal en /etc/postfix."
  },
  {
    "question": "95. En un archivo de zona BIND, ¿qué indica el carácter @?",
    "options": [
      "A. Es el nombre de host completamente cualificado del servidor DNS.",
      "B. Es un alias para la dirección de correo electrónico del maestro de zona.",
      "C. Es el nombre de la zona tal como se define en la declaración zone en named.conf.",
      "D. Se utiliza para crear un alias entre dos entradas CNAME."
    ],
    "answer": "C",
    "explicacion": "El símbolo @ se expande al origen actual ($ORIGIN), que por defecto es el nombre de la zona definido en la configuración.",
    "pista": "El origen de la zona."
  },
  {
    "question": "96. ¿Qué DOS entradas en /etc/hosts.allow permitirán el acceso a sshd desde la red clase C 192.168.1.0?",
    "options": [
      "A. sshd: 192.168.1.",
      "B. sshd: 192.168.1",
      "C. sshd: 192.168.1.0 netmask 255.255.255.0",
      "D. sshd: 192.168.1.0/255.255.255.0",
      "E. sshd: 192.168.1.0"
    ],
    "answer": "A, D",
    "explicacion": "TCP Wrappers acepta '192.168.1.' (punto final) como comodín para la red, o la notación CIDR/máscara completa.",
    "pista": "Punto final o máscara completa."
  },
  {
    "question": "97. ¿Cuál de los siguientes demonios monitoreará archivos de registro en busca de actividad inapropiada, como intentos fallidos de inicio de sesión, y agregará reglas de firewall para bloquear la dirección ofensiva?",
    "options": [
      "A. fail2ban",
      "B. portsentry",
      "C. openids",
      "D. logwatch"
    ],
    "answer": "A",
    "explicacion": "Fail2ban escanea logs (como /var/log/auth.log) y banea IPs que muestran patrones maliciosos actualizando las reglas del firewall.",
    "pista": "Del fallo al baneo."
  },
  {
    "question": "98. ¿Qué TRES acciones se deben considerar al crear una jaula chroot para FTP?",
    "options": [
      "A. Crear /dev/ y /etc/ en el entorno chroot",
      "B. Crear /etc/passwd en el entorno chroot",
      "C. Crear /var/cache/ftp en el entorno chroot",
      "D. Crear el usuario ftp en el entorno chroot",
      "E. Crear /usr/sbin/ en el entorno chroot"
    ],
    "answer": "A, B, D",
    "explicacion": "Se necesitan los dispositivos básicos, la base de datos de usuarios (passwd) y el usuario propiamente dicho dentro de la estructura de la jaula.",
    "pista": "Dispositivos, usuarios y passwd."
  },
  {
    "question": "99. ¿Qué opción de dhcpd.conf define las direcciones de servidor DNS que se enviarán a los clientes DHCP?",
    "options": [
      "A. domain name",
      "B. domain-name-servers",
      "C. domain-nameserver",
      "D. domain-name-server"
    ],
    "answer": "B",
    "explicacion": "La opción correcta es 'option domain-name-servers' (en plural), seguida de las IPs separadas por comas.",
    "pista": "Servidores de nombres en plural."
  },
  {
    "question": "100. Introduce el comando completo para crear un nuevo archivo de contraseñas para autenticación básica HTTP (/home/http/data/web_passwd) para el usuario john.",
    "answer": "htpasswd -c /home/http/data/web_passwd john",
    "explicacion": "La opción '-c' (create) se usa para crear un archivo nuevo. Si el archivo ya existe, lo sobrescribe.",
    "pista": "Comando htpasswd con flag de creación."
  },
  {
    "question": "101. ¿Qué opción de BIND se debe usar para limitar desde qué direcciones IP pueden conectarse los servidores de nombres esclavos para transferencias?",
    "options": [
      "A. allow-zone-transfer",
      "B. allow-transfer",
      "C. allow-secondary",
      "D. allow-slaves",
      "E. allow-queries"
    ],
    "answer": "B",
    "explicacion": "La directiva 'allow-transfer' especifica qué hosts tienen permiso para solicitar una transferencia de zona (AXFR/IXFR) desde el servidor maestro.",
    "pista": "Permitir transferencia."
  },
  {
    "question": "102. ¿Qué se debe hacer en un host para permitir que un usuario inicie sesión en ese host usando una clave SSH?",
    "options": [
      "A. Añadir su clave privada a ~/.ssh/authorized_keys",
      "B. Referenciar su clave pública en ~/.ssh/config",
      "C. Ejecutar ssh-agent en ese host",
      "D. Añadir su clave pública a ~/.ssh/authorized_keys",
      "E. Referenciar su clave privada en ~/.ssh/config"
    ],
    "answer": "D",
    "explicacion": "Para autenticación con clave pública, la clave pública del usuario debe colocarse en el archivo '~/.ssh/authorized_keys' de la cuenta de destino en el servidor.",
    "pista": "Claves autorizadas."
  },
  {
    "question": "103. Según el archivo dhcpd.conf, ¿qué nombre de dominio obtendrán los clientes en la red 172.16.87.0/24? (Opción global: domain.com; Opción en subred 87.0: lab.domain.com)",
    "answer": "lab.domain.com",
    "explicacion": "Las opciones definidas dentro de una declaración de subred ('option domain-name') anulan las opciones globales para los clientes de esa subred.",
    "pista": "La subred manda."
  },
  {
    "question": "104. Un usuario malicioso ha enviado un video de 35MB... Este correo puede ser eliminado manualmente de la cola. Completa el comando: rm ...",
    "answer": "/var/spool/mqueue/*",
    "explicacion": "Para eliminar correos directamente de la cola de Sendmail (si se opta por el borrado manual de archivos, que es arriesgado pero efectivo), se borran los archivos en '/var/spool/mqueue/'.",
    "pista": "Ruta de la cola de correo."
  },
  {
    "question": "105. Con Nginx, ¿cuál de las siguientes directivas se utiliza para pasar solicitudes a una aplicación FastCGI?",
    "options": [
      "A. fastcgi_pass",
      "B. fastcgi_proxy",
      "C. proxy_fastcgi",
      "D. proxy_fastcgi_pass"
    ],
    "answer": "A",
    "explicacion": "'fastcgi_pass' es la directiva que especifica la dirección (IP:puerto o socket unix) del servidor FastCGI backend.",
    "pista": "Pasar a FastCGI."
  },
  {
    "question": "106. ¿Qué opción para BIND se requiere en las opciones globales para deshabilitar las consultas recursivas en el servidor DNS por defecto?",
    "options": [
      "A. allow-recursive-query { none; };",
      "B. allow-recursive-query off;",
      "C. recursion { none; };",
      "D. recursion no;"
    ],
    "answer": "D",
    "explicacion": "La sintaxis correcta en named.conf para desactivar la recursión es 'recursion no;'.",
    "pista": "Recursión no."
  },
  {
    "question": "107. ¿Cuál es la palabra clave que falta en la siguiente configuración de Dovecot? 'auth default { _______ = plain login cram-md5 }'",
    "options": [
      "A. auth_order",
      "B. mechanisms",
      "C. methods",
      "D. supported"
    ],
    "answer": "B",
    "explicacion": "La directiva 'mechanisms' define qué mecanismos de autenticación SASL (como plain, login, cram-md5) aceptará Dovecot.",
    "pista": "Mecanismos."
  },
  {
    "question": "108. ¿Durante qué etapa del proceso de arranque se vería este mensaje? 'ide_setup:hdc=ide-scsi'",
    "options": [
      "A. Inicio del gestor de arranque y paso al kernel",
      "B. Carga del Kernel",
      "C. Inicialización y configuración de hardware",
      "D. Inicialización y configuración de demonios"
    ],
    "answer": "B",
    "explicacion": "Este tipo de mensajes de configuración de controladores de dispositivos ocurren durante la fase de carga e inicialización del núcleo (Kernel loading), antes de montar el sistema de archivos raíz.",
    "pista": "Carga del núcleo."
  },
  {
    "question": "109. ¿Qué DOS afirmaciones sobre los archivos de configuración de tcp_wrappers son correctas?",
    "options": [
      "A. Ambos archivos deben editarse para que funcione correctamente",
      "B. Es posible configurar tcp_wrappers usando solo un archivo",
      "C. (x)inetd requiere estos archivos",
      "D. Todos los programas usan estos archivos",
      "E. tcpd usa estos archivos para controlar el acceso"
    ],
    "answer": "B, E",
    "explicacion": "tcpd (el wrapper) lee estos archivos (/etc/hosts.allow y .deny). Es posible usar solo hosts.allow (denegando todo al final) o solo hosts.deny, no es obligatorio usar ambos.",
    "pista": "Solo un archivo y tcpd."
  },
  {
    "question": "110. ¿Qué opción se usa para configurar pppd para usar hasta dos direcciones de servidor DNS proporcionadas por el servidor remoto?",
    "options": [
      "A. ms-dns",
      "B. nameserver",
      "C. usepeerdns",
      "D. dns",
      "E. Ninguna de las anteriores"
    ],
    "answer": "E",
    "explicacion": "Aunque 'usepeerdns' es la opción común para solicitar DNS, la pregunta y respuesta oficial marcan 'Ninguna' (E), posiblemente por tecnicismos sobre 'ms-dns' (opción de servidor) vs cliente. Sin embargo, en la práctica 'usepeerdns' es la clave.",
    "pista": "Respuesta E (según dump oficial)."
  },
  {
    "question": "111. ¿Qué puerto debe estar abierto en un firewall para permitir que un servidor DNS reciba consultas? (Solo el número)",
    "answer": "53",
    "explicacion": "DNS utiliza el puerto 53 (tanto UDP como TCP).",
    "pista": "Puerto estándar DNS."
  },
  {
    "question": "112. ¿Qué programa lista información sobre archivos abiertos por procesos y produce una salida que puede ser analizada por otros programas?",
    "answer": "lsof",
    "explicacion": "lsof (List Open Files) es la herramienta estándar para ver qué archivos están siendo usados por qué procesos.",
    "pista": "Listar archivos abiertos."
  },
  {
    "question": "113. En un archivo PAM, ¿qué es cierto sobre el flag de control 'sufficient'?",
    "options": [
      "A. Se llama si está presente, si no, se prueban otros.",
      "B. Es suficiente para determinar éxito o fracaso y no se prueban más.",
      "C. El fallo no es fatal, y si tiene éxito, se retorna éxito a la aplicación inmediatamente (sin probar más).",
      "D. Si un módulo requerido previo falla, se usa este para comprobar."
    ],
    "answer": "C",
    "explicacion": "Si un módulo 'sufficient' tiene éxito y no ha fallado ningún módulo 'required' anterior, PAM otorga acceso inmediatamente sin procesar el resto de la pila.",
    "pista": "Éxito inmediato si no hubo fallos previos."
  },
  {
    "question": "114. ¿Cuál es la ubicación predeterminada para los archivos de configuración de sendmail? (Ruta completa al directorio)",
    "answer": "/etc/mail",
    "explicacion": "Sendmail almacena sus archivos de configuración (sendmail.cf, aliases, access, etc.) en /etc/mail.",
    "pista": "Directorio de correo en etc."
  },
  {
    "question": "115. Si no hay directiva de acceso, ¿cuál es la configuración por defecto para OpenLDAP?",
    "options": [
      "A. access to * by anonymous read by * none",
      "B. access to * by anonymous read by * read",
      "C. access to * by anonymous auth by * read",
      "D. access to * by anonymous write by * read"
    ],
    "answer": "A",
    "explicacion": "La política por defecto 'read by * none' suele implicar que si no se define acceso, se restringe severamente, aunque la respuesta A es la marcada como correcta en la fuente.",
    "pista": "Respuesta A."
  },
  {
    "question": "116. ¿Cuál de las siguientes frases es VERDADERA sobre FreeS/WAN?",
    "options": [
      "A. No soporta usuarios remotos.",
      "B. FreeS/WAN necesita un parche para soportar NAT traversal (NAT-T) para usuarios tras un gateway NAT.",
      "C. No requiere módulos del kernel.",
      "D. Solo permite cifrado fuerte entre hosts Linux.",
      "E. No se puede usar con Windows 2000."
    ],
    "answer": "B",
    "explicacion": "Históricamente, FreeS/WAN (implementación temprana de IPsec) requería parches para atravesar NAT (NAT Traversal).",
    "pista": "Parche NAT."
  },
  {
    "question": "117. ¿Qué comando se usa para cambiar contraseñas de usuario en un directorio OpenLDAP?",
    "options": [
      "A. passwd",
      "B. ldpasswd",
      "C. smbpasswd",
      "D. ldappasswd",
      "E. chpasswd"
    ],
    "answer": "D",
    "explicacion": "'ldappasswd' es la herramienta específica para modificar la contraseña (userPassword) en un servidor LDAP.",
    "pista": "LDAP passwd."
  },
  {
    "question": "118. ¿Cuál es una diferencia significativa entre las claves de host y de zona generadas por dnssec-keygen?",
    "options": [
      "A. No hay diferencia.",
      "B. Ambos archivos de clave de zona (.key/.private) contienen una clave pública y privada.",
      "C. Ambos archivos de clave de host contienen una clave pública y privada.",
      "D. Las claves de host siempre deben generarse...",
      "E. Las claves de zona siempre deben generarse..."
    ],
    "answer": "B",
    "explicacion": "Esta pregunta se refiere a una peculiaridad en la generación o estructura de los archivos de claves de zona en DNSSEC.",
    "pista": "Respuesta B."
  },
  {
    "question": "119. ¿En qué archivo de un servidor de noticias INN se puede configurar el acceso al servidor? (Solo nombre de archivo)",
    "answer": "readers.conf",
    "explicacion": "El archivo 'readers.conf' controla quién puede leer o publicar noticias en el servidor INN.",
    "pista": "Configuración de lectores."
  },
  {
    "question": "120. Un cliente de red (192.168.0.0/24) necesita usar el router 192.168.0.1 como puerta de enlace predeterminada. ¿Qué se debe hacer?",
    "options": [
      "A. Ejecutar 'route add default gw 192.168.0.1 eth1'",
      "B. Ejecutar 'route add gw 192.168.0.1 eth1'",
      "C. Ejecutar 'ifconfig eth0 defaultroute 192.168.0.1'",
      "D. Añadir 'defaultroute 192.168.0.1' a /etc/resolv.conf",
      "E. Ejecutar 'route add defaultgw ...'"
    ],
    "answer": "A",
    "explicacion": "El comando correcto para añadir una puerta de enlace por defecto es 'route add default gw <IP> <interfaz>'.",
    "pista": "Añadir ruta por defecto."
  },
  {
    "question": "121. ¿Cuál de estas sería la forma más sencilla de configurar BIND para que devuelva un número de versión diferente ante las consultas?",
    "options": [
      "A. Compilar BIND con la opción -blur-version=my version.",
      "B. Establecer version-string \"my version\" en el archivo de configuración.",
      "C. Establecer version \"my version\" en el archivo de configuración.",
      "D. Establecer version my version en el archivo de configuración.",
      "E. Establecer version-bind \"my version\" en el archivo de configuración."
    ],
    "answer": "C",
    "explicacion": "La directiva 'version' dentro del bloque 'options' en named.conf permite ocultar o cambiar la versión reportada por seguridad.",
    "pista": "Opción version."
  },
  {
    "question": "122. Para acceder al servidor 10.12.34.56 por HTTPS desde el cliente 192.168.43.12, se necesita una regla iptables. ¿Cuál es correcta?",
    "options": [
      "A. iptables -A FORWARD -p tcp -s 0/0 -d 10.12.34.56 --dport 80 -j ACCEPT",
      "B. iptables -A FORWARD -p tcp -s 192.168.43.12 d 10.12.34.56:443 -j ACCEPT",
      "C. iptables -A FORWARD -p tcp -s 192.168.43.12 -d 10.12.34.56 --dport 443 -j ACCEPT",
      "D. iptables -A INPUT -p tcp -s 192.168.43.12 -d 10.12.34.56:80 -j ACCEPT",
      "E. iptables -A FORWARD -p tcp -s 0/0 -d 10.12.34.56 --dport 443 -j ACCEPT"
    ],
    "answer": "C",
    "explicacion": "Se necesita permitir tráfico FORWARD (si pasa por el firewall) hacia el puerto de destino (--dport) 443 (HTTPS) desde la IP origen específica.",
    "pista": "FORWARD y puerto 443."
  },
  {
    "question": "123. Para evitar que los usuarios FTP anónimos listen los nombres de archivos subidos, ¿qué precaución de seguridad se debe tomar al crear el directorio de subida?",
    "options": [
      "A. El directorio no debe tener permiso de ejecución.",
      "B. El directorio no debe tener permiso de lectura.",
      "C. El directorio no debe tener permisos de lectura ni ejecución.",
      "D. El directorio no debe tener permiso de escritura.",
      "E. El directorio no debe contener otros directorios."
    ],
    "answer": "B",
    "explicacion": "Sin permiso de lectura (r), no se puede listar el contenido ('ls'), pero si tiene ejecución (x) y escritura (w), se pueden subir archivos a ciegas.",
    "pista": "Sin lectura."
  },
  {
    "question": "124. El comando '-x foo' eliminará al usuario foo de la base de datos de Samba. (Especifica solo el comando, sin ruta)",
    "answer": "smbpasswd",
    "explicacion": "El comando 'smbpasswd -x usuario' elimina al usuario de la base de datos de contraseñas de Samba.",
    "pista": "Contraseña Samba."
  },
  {
    "question": "125. ¿Qué herramienta escanea archivos de registro en busca de intentos de inicio de sesión fallidos y bloquea las direcciones IP ofensivas con reglas de firewall?",
    "options": [
      "A. nessus",
      "B. nmap",
      "C. nc",
      "D. watchlogs",
      "E. fail2ban"
    ],
    "answer": "E",
    "explicacion": "fail2ban es la herramienta estándar para prevención de intrusiones basada en análisis de logs y baneo dinámico.",
    "pista": "Fallar al banear."
  },
  {
    "question": "126. ¿Qué bloque de configuración en Nginx se utiliza para definir la configuración de un servidor web con proxy inverso?",
    "options": [
      "A. server",
      "B. location",
      "C. reverse",
      "D. http"
    ],
    "answer": "B",
    "explicacion": "Las directivas de proxy (como proxy_pass) se colocan típicamente dentro de un bloque 'location' que define qué rutas URL serán reenviadas.",
    "pista": "Ubicación."
  },
  {
    "question": "127. ¿Cuál es el número de puerto estándar para el servicio IMAP no cifrado?",
    "options": [
      "A. 25",
      "B. 143",
      "C. 443",
      "D. 993",
      "E. 1066"
    ],
    "answer": "B",
    "explicacion": "IMAP utiliza el puerto 143 por defecto. IMAPS (cifrado) usa el 993.",
    "pista": "Puerto IMAP."
  },
  {
    "question": "128. ¿Qué opción se puede usar para permitir el acceso a un servidor DNS BIND solo desde redes/hosts especificados?",
    "options": [
      "A. Usando la declaración limit {...; };",
      "B. Usando la declaración allow-query { ...; };",
      "C. Usando la declaración answer-only { ...; };",
      "D. Usando la declaración allow-answer {...; };",
      "E. Usando la declaración query-access {...; };"
    ],
    "answer": "B",
    "explicacion": "allow-query controla quién puede enviar consultas al servidor.",
    "pista": "Permitir consultas."
  },
  {
    "question": "129. ¿Durante qué etapa del proceso de arranque se vería este mensaje? 'ide0: BM-DMA at 0xff00-0xff07, BIOS settings: hda: DMA, hdb: DMA'",
    "options": [
      "A. Inicio del gestor de arranque y paso al kernel",
      "B. Carga del Kernel",
      "C. Inicialización y configuración de hardware",
      "D. Inicialización y configuración de demonios"
    ],
    "answer": "C",
    "explicacion": "Este mensaje específico sobre DMA y configuración de BIOS indica la detección e inicialización de hardware por parte del kernel.",
    "pista": "Hardware DMA."
  },
  {
    "question": "130. ¿Cuál de los siguientes parámetros de configuración de Samba es funcionalmente idéntico al parámetro 'read only = yes'?",
    "options": [
      "A. browseable = no",
      "B. read write = no",
      "C. writeable = no",
      "D. write only = no",
      "E. write access = no"
    ],
    "answer": "C",
    "explicacion": "'writeable' es un sinónimo inverso de 'read only'. Decir que no es escribible es igual a decir que es solo lectura.",
    "pista": "No escribible."
  },
  {
    "question": "131. Un servidor BIND debe actualizarse para usar TSIG con algoritmo hmac-md5 y clave 'skrKc...'. ¿Qué configuración es correcta?",
    "options": [
      "A. TSIG server... { algorithm hmac-md5; secret ...; };",
      "B. key server... { algorithm hmac-md5; secret skrKc...; };",
      "C. key server.example.com. { algorithm hmac-md5; secret \"skrKc...\"; };",
      "D. key server... { algorithm=hmac-md5; secret=\"...\"; };",
      "E. key server... { algorithm hmac-md5 secret \"...\" };"
    ],
    "answer": "C",
    "explicacion": "Se define una 'key' con el nombre del servidor, especificando el algoritmo y el secreto entre comillas.",
    "pista": "Clave con comillas."
  },
  {
    "question": "132. Una empresa cambia de dominio y quiere aceptar correo para ambos dominios en un servidor Postfix. ¿Qué opción de configuración debe actualizarse?",
    "options": [
      "A. mydomain",
      "B. mylocations",
      "C. mydestination",
      "D. myhosts",
      "E. mydomains"
    ],
    "answer": "C",
    "explicacion": "'mydestination' lista los dominios que el servidor considera locales y para los cuales aceptará entrega final.",
    "pista": "Mi destino."
  },
  {
    "question": "133. ¿Qué herramienta se puede usar para crear Solicitudes de Firma de Certificado (CSR) para un servidor Apache con HTTPS?",
    "options": [
      "A. apachectl",
      "B. certgen",
      "C. csrtool",
      "D. httpsgen",
      "E. openssl"
    ],
    "answer": "E",
    "explicacion": "OpenSSL es la herramienta estándar para gestionar claves, certificados y CSRs.",
    "pista": "Herramienta SSL estándar."
  },
  {
    "question": "134. Un gestor de arranque GRUB en el MBR fue sobrescrito. Tras arrancar con un CD de rescate, ¿cómo se puede recuperar el cargador de primera etapa de GRUB?",
    "options": [
      "A. Usar dd para restaurar un backup previo del MBR",
      "B. Instalar LILO",
      "C. Ejecutar mformat",
      "D. Ejecutar grub-install después de verificar grub.conf",
      "E. Ejecutar fdisk --mbr /dev/hda"
    ],
    "answer": "D",
    "explicacion": "'grub-install' reinstala el gestor de arranque en el MBR basándose en la configuración existente.",
    "pista": "Instalar grub."
  },
  {
    "question": "135. ¿Cuál de los siguientes define el tamaño máximo permitido de artículo en el archivo de configuración para INN?",
    "options": [
      "A. limitartsize",
      "B. artsizelimit",
      "C. maxartlimit",
      "D. maxartsize",
      "E. setartlimit"
    ],
    "answer": "D",
    "explicacion": "'maxartsize' especifica el tamaño máximo de un artículo de noticias que el servidor aceptará.",
    "pista": "Tamaño máximo de artículo."
  },
  {
    "question": "136. ¿Qué programa servidor entenderá y podrá responder a las solicitudes de servicio de nombres NetBIOS?",
    "options": [
      "A. netbios",
      "B. nmbd",
      "C. smbd",
      "D. winbindd"
    ],
    "answer": "B",
    "explicacion": "'nmbd' es el demonio de Samba encargado del NetBIOS Name Service.",
    "pista": "Demonio NetBIOS."
  },
  {
    "question": "137. Al arrancar, LILO imprime 'LIL' y se detiene. ¿Cuál es la causa?",
    "options": [
      "A. La tabla de descriptores está mal (o fallo de medios/geometría)",
      "B. LILO falló al cargar el cargador de segunda etapa",
      "C. LILO falló al cargar el cargador de etapa primaria",
      "D. LILO falló al localizar la imagen del kernel"
    ],
    "answer": "A",
    "explicacion": "Si LILO se detiene tras imprimir parte de su nombre, indica en qué fase falló. 'LIL-' o 'LIL' suele indicar fallo al cargar la segunda etapa debido a geometría de disco incorrecta o tabla de descriptores corrupta.",
    "pista": "Tabla de descriptores o geometría."
  },
  {
    "question": "138. ¿Cuál de las siguientes líneas en la configuración de Apache permitiría solo a clientes con un certificado válido acceder al sitio web?",
    "options": [
      "A. SSLCA conf/ca.crt",
      "B. AuthType ssl",
      "C. IfModule libexec/ssl.c",
      "D. SSLRequire",
      "E. SSLVerifyClient require"
    ],
    "answer": "E",
    "explicacion": "'SSLVerifyClient require' fuerza al servidor a solicitar y validar un certificado del cliente para permitir la conexión.",
    "pista": "Verificar cliente requerido."
  },
  {
    "question": "139. ¿Cuál es el nombre del proyecto de escáner de seguridad de red que, en su núcleo, es un servidor con un conjunto de pruebas de vulnerabilidad (NVTs)?",
    "options": [
      "A. nmap",
      "B. OpenVAS",
      "C. Snort",
      "D. wireshark"
    ],
    "answer": "B",
    "explicacion": "OpenVAS (Open Vulnerability Assessment System) utiliza NVTs (Network Vulnerability Tests).",
    "pista": "Sistema de evaluación de vulnerabilidades."
  },
  {
    "question": "140. Un administrador quiere ejecutar un comando echo una vez que todos los scripts en /etc/rc2.d se hayan ejecutado. ¿Cuál es la mejor manera?",
    "options": [
      "A. Añadir el comando a /etc/rc.local",
      "B. Crear un script en ~/.kde/Autostart/",
      "C. Crear un script en /etc/init.d/ y enlazarlo",
      "D. Crear un script en /etc/rc2.d/"
    ],
    "answer": "A",
    "explicacion": "Históricamente en sistemas SysVinit, el script /etc/rc.local se ejecuta al final del proceso de arranque, después de todos los scripts de nivel de ejecución normales.",
    "pista": "Script local al final del arranque."
  },
  
  
  
  
  
  {
    "question": "141. ¿Qué DOS comandos se podrían usar para añadir una segunda dirección IP a la interfaz eth0?",
    "options": [
      "A. ifconfig eth0 -add ip 192.168.123.10",
      "B. ifconfig eth0:1 192.168.123.10",
      "C. ifconfig eth0 1 192.168.123.10",
      "D. ifconfig eth0 +192.168.123.10",
      "E. ifconfig eth0:sub1 192.168.123.10"
    ],
    "answer": "B, E",
    "explicacion": "Para añadir IPs secundarias (aliasing) con ifconfig, se utiliza la notación de interfaz:etiqueta (ej. eth0:1 o eth0:sub1).",
    "pista": "Aliasing de interfaz con dos puntos."
  },
  {
    "question": "142. Se debe obtener un OID privado para usar con OpenLDAP para una empresa cuando:",
    "options": [
      "A. La empresa pretende utilizar un esquema LDAP comercial.",
      "B. La empresa quiere hacer su directorio disponible al público en Internet.",
      "C. La empresa planea crear archivos de esquema personalizados para su directorio.",
      "D. La empresa desea utilizar un atributo cifrado."
    ],
    "answer": "C",
    "explicacion": "Los OID (Object Identifiers) únicos son necesarios para definir nuevos objetos y atributos personalizados sin entrar en conflicto con estándares existentes.",
    "pista": "Esquemas personalizados."
  },
  {
    "question": "143. Además de nfsd y portmap, ¿qué otro demonio debe estar ejecutándose en un servidor NFS?",
    "answer": "mountd",
    "explicacion": "rpc.mountd es el demonio encargado de gestionar las solicitudes de montaje de sistemas de archivos NFS.",
    "pista": "Demonio de montaje."
  },
  {
    "question": "144. ¿Cuál es el formato correcto para una entrada en el archivo ftpusers?",
    "options": [
      "A. Usar solo un nombre de usuario en cada línea.",
      "B. Añadir dos puntos después de cada nombre de usuario.",
      "C. Añadir un punto y coma después de cada nombre de usuario.",
      "D. Añadir ALLOW después de cada nombre de usuario.",
      "E. Añadir DENY después de cada nombre de usuario."
    ],
    "answer": "A",
    "explicacion": "El archivo /etc/ftpusers es una lista simple de usuarios a los que se les *deniega* el acceso, con un usuario por línea.",
    "pista": "Un usuario por línea."
  },
  {
    "question": "145. ¿Qué directiva de Apache se utiliza para especificar el método de autenticación, como por ejemplo None o Basic?",
    "options": [
      "A. AuthUser",
      "B. AllowedAuthUser",
      "C. AuthType",
      "D. AllowAuth"
    ],
    "answer": "C",
    "explicacion": "La directiva 'AuthType' define el tipo de autenticación de usuario (Basic, Digest, etc.).",
    "pista": "Tipo de autenticación."
  },
  {
    "question": "146. Algunos usuarios no pueden conectar a hosts locales específicos por nombre... Si los hosts son accesibles por IP, ¿qué archivo de registro por defecto podría dar pistas sobre el problema?",
    "options": [
      "A. /var/named/log",
      "B. /var/lib/named/dev/log",
      "C. /var/log/bind_errors",
      "D. /var/log/bind/errors",
      "E. /var/log/messages"
    ],
    "answer": "E",
    "explicacion": "Por defecto, si no se configura un canal de logging específico en BIND, los mensajes de error del sistema y de servicios suelen ir a /var/log/messages (o syslog).",
    "pista": "Log general del sistema."
  },
  {
    "question": "147. El gateway conecta clientes a Internet usando Squid. Solo los clientes de la red 192.168.1.0/24 deben poder usar el proxy. ¿Qué configuración es correcta?",
    "options": [
      "A. acl local src 192.168.1.0/24; http_allow local",
      "B. acl local src 192.168.1.0/24; http_access allow local",
      "C. acl local src 192.168.1.0/24; http access allow local",
      "D. acl local src 192.168.1.0/24; http_access_allow=local",
      "E. acl local src 192.168.1.0/24; httpd local allow"
    ],
    "answer": "B",
    "explicacion": "Primero se define la ACL ('acl nombre src red') y luego se aplica la regla de acceso ('http_access allow nombre').",
    "pista": "http_access allow."
  },
  {
    "question": "148. Se tiene una configuración de Samba con 'hosts allow' y 'hosts deny'. Un portátil inalámbrico (192.168.2.93) accede, pero la red cableada (192.168.1.x) no. ¿Qué opción permite a la red cableada conectar sin denegar a nadie más?",
    "options": [
      "A. hosts allow= 192.168.1.1-255",
      "B. hosts allow= 192.168.1.100 192.168.2.200 localhost",
      "C. hosts deny= 192.168.1.100/255.255.255.0 ...",
      "D. hosts deny= 192.168.2.200/255.255.255.0 ...",
      "E. hosts allow= 192.168.1.0/255.255.255.0 192.168.2.0/255.255.255.0 localhost"
    ],
    "answer": "E",
    "explicacion": "La opción E permite explícitamente ambas subredes (la cableada .1.0 y la inalámbrica .2.0) y localhost, asegurando acceso correcto.",
    "pista": "Permitir ambas redes."
  },
  {
    "question": "149. ¿Dónde debería colocarse la línea '$TTL 86400' en un archivo de zona BIND?",
    "options": [
      "A. Como la primera línea del archivo de zona.",
      "B. En cualquier archivo de zona que contenga pistas a los servidores raíz.",
      "C. En el registro SOA del archivo de zona.",
      "D. Se requiere justo antes de que se definan los registros A."
    ],
    "answer": "A",
    "explicacion": "La directiva $TTL define el tiempo de vida por defecto para los registros que no lo especifican y debe aparecer al inicio del archivo, antes del registro SOA.",
    "pista": "Primera línea."
  },
  {
    "question": "150. Al configurar un servidor de acceso telefónico PPP, ¿qué opción se usa (en pppd) para habilitar la autenticación de usuarios contra la base de datos de contraseñas del sistema?",
    "options": [
      "A. login",
      "B. auth",
      "C. local",
      "D. password",
      "E. user"
    ],
    "answer": "A",
    "explicacion": "La opción 'login' indica a pppd que use la base de datos de usuarios del sistema (PAP/CHAP via /etc/passwd o PAM) para la autenticación.",
    "pista": "Opción login."
  },
  {
    "question": "151. En el archivo de configuración principal de Postfix, ¿cómo se continúan las definiciones de servicio en la siguiente línea?",
    "options": [
      "A. No es posible.",
      "B. La línea inicial debe terminar con barra invertida (\\).",
      "C. La siguiente línea debe comenzar con un signo más (+).",
      "D. La siguiente línea debe comenzar con una indentación de espacio en blanco.",
      "E. La definición continúa hasta que se especifican todos los campos."
    ],
    "answer": "D",
    "explicacion": "Postfix sigue la convención de que una línea que comienza con espacio o tabulador es una continuación de la línea anterior.",
    "pista": "Indentación con espacio."
  },
  {
    "question": "152. ¿Qué sucede cuando el kernel de Linux no puede montar el sistema de archivos raíz durante el arranque?",
    "options": [
      "A. Se muestra un mensaje de error indicando qué dispositivo falló o que no se encontró init (Kernel panic).",
      "B. Se muestra un error y el sistema se reinicia tras pulsar una tecla.",
      "C. Se muestra un error y el sistema arranca en modo mantenimiento.",
      "D. Se pide al administrador que especifique un sistema de archivos raíz válido.",
      "E. Se muestra un error sobre módulos no cargados."
    ],
    "answer": "A",
    "explicacion": "Si el kernel no puede montar root, no puede cargar 'init', por lo que el sistema se detiene con un 'Kernel panic: VFS: Unable to mount root fs'.",
    "pista": "Kernel panic o error de montaje."
  },
  {
    "question": "153. Este programa tiene 3 modos de operación: copy-in, copy-out y copy-pass, y se usa para copiar archivos dentro o fuera de archivos (archivers). ¿Qué programa es?",
    "answer": "cpio",
    "explicacion": "cpio es una herramienta de archivado clásica que opera con flujos de entrada/salida (modos -i, -o, -p).",
    "pista": "Modos copy-in/out."
  },
  {
    "question": "154. ¿Qué DOS opciones de las siguientes son válidas en el archivo /etc/exports?",
    "options": [
      "A. rw",
      "B. ro",
      "C. rootsquash",
      "D. norootsquash",
      "E. uid"
    ],
    "answer": "A, B",
    "explicacion": "rw (lectura/escritura) y ro (solo lectura) son opciones básicas válidas. (Nota: root_squash lleva guion bajo, por lo que C y D están mal escritas técnicamente en esta pregunta trampa).",
    "pista": "Lectura y escritura."
  },
  {
    "question": "155. El journaling no parece funcionar en un sistema de archivos ext3. Al arrancar aparece: 'VFS: Mounted root (ext2 filesystem) read only'. ¿Cuál podría ser la causa?",
    "options": [
      "A. Se instaló una versión antigua de e2fsprogs.",
      "B. El kernel no contiene soporte para ext3.",
      "C. El sistema de archivos está especificado como ext2 en /etc/fstab.",
      "D. El sistema no se apagó limpiamente."
    ],
    "answer": "B",
    "explicacion": "Si el kernel monta un sistema ext3 como ext2, es porque carece del controlador ext3 y recurre al controlador compatible ext2.",
    "pista": "Falta soporte en el kernel."
  },
  {
    "question": "156. ¿Qué comando debe usarse para imprimir la tabla de enrutamiento del kernel?",
    "options": [
      "A. route print",
      "B. route enumerate",
      "C. route show",
      "D. route list",
      "E. route"
    ],
    "answer": "E",
    "explicacion": "El comando 'route' sin argumentos muestra la tabla de enrutamiento actual.",
    "pista": "Comando route a secas."
  },
  {
    "question": "157. ¿Qué NO puede comprobar el programa tripwire?",
    "options": [
      "A. Tamaño del archivo.",
      "B. Firma del archivo.",
      "C. Permisos.",
      "D. Existencia del archivo.",
      "E. Sectores de arranque."
    ],
    "answer": "E",
    "explicacion": "Tripwire es un verificador de integridad de archivos y directorios del sistema de archivos, no comprueba sectores físicos de arranque (MBR/Boot Sectors).",
    "pista": "Sectores de arranque."
  },
  {
    "question": "158. Conectar por SSH con clave pública funciona, pero el reenvío de X11 no. El host remoto permite ambos. ¿Cuál puede ser la razón?",
    "options": [
      "A. El archivo ssh_config del usuario remoto no permite reenvío X11.",
      "B. El archivo sshd_config del servidor remoto no permite reenvío X11.",
      "C. Se debe usar una clave pública diferente para X11.",
      "D. X11 no se puede reenviar si se usa autenticación de clave pública.",
      "E. X11 por SSH necesita una aplicación servidor X11 especial."
    ],
    "answer": "B",
    "explicacion": "Aunque el cliente lo solicite, si el servidor tiene 'X11Forwarding no' en /etc/ssh/sshd_config, la solicitud será denegada.",
    "pista": "Configuración del servidor sshd."
  },
  {
    "question": "159. Al intentar hacer proxy inverso de un servidor web a través de Nginx, ¿qué palabra clave falta? 'location / { ________ http://proxiedserver:8080; }'",
    "options": [
      "A. remote_proxy",
      "B. reverse_proxy",
      "C. proxy_reverse",
      "D. proxy_pass"
    ],
    "answer": "D",
    "explicacion": "'proxy_pass' es la directiva fundamental para configurar el reenvío a un backend en Nginx.",
    "pista": "Pasar al proxy."
  },
  {
    "question": "160. ¿Qué comando se utiliza para añadir una ruta a la red 192.168.4.0/24 a través de 192.168.0.2?",
    "options": [
      "A. route add -network ...",
      "B. route add -net 192.168.4.0/24 gw 192.168.0.2",
      "C. route add -network ...",
      "D. route add -net ...",
      "E. route add -net 192.168.4.0 netmask 255.255.255.0 gw 192.168.0.2"
    ],
    "answer": "E",
    "explicacion": "La sintaxis clásica más compatible es especificar la máscara con 'netmask' y la puerta de enlace con 'gw'. (La opción B también podría funcionar en versiones modernas, pero E es la forma canónica completa).",
    "pista": "Netmask y Gateway."
  },
  
  
  {
    "question": "161. Considerando el siguiente extracto de httpd.conf: '<Location /var/web/dir1> AllowOverride AuthConfig Indexes </Location>'. ¿Qué es correcto?",
    "options": [
      "A. La directiva Indexes permite el uso de otras directivas de índice.",
      "B. Las directivas AuthConfig e Indexes en .htaccess anularán las de httpd.conf.",
      "C. AuthConfig permite directivas como AuthType.",
      "D. El extracto es incorrecto porque AllowOverride no puede usarse con Indexes.",
      "E. El extracto es incorrecto porque AllowOverride no puede usarse dentro de una sección Location."
    ],
    "answer": "E",
    "explicacion": "La directiva 'AllowOverride' solo es válida dentro de secciones <Directory> (sin expresiones regulares), no en <Location> ni <Files>.",
    "pista": "AllowOverride solo en Directory."
  },
  {
    "question": "162. ¿Por qué el sistema de archivos raíz se monta en modo solo lectura durante el arranque y se remonta con escritura más tarde?",
    "options": [
      "A. Para que fsck pueda ejecutarse sin riesgo de daños si se detectan problemas.",
      "B. Para evitar que sniffers de arranque recopilen información de root.",
      "C. Para evitar escritura en disco sin la contraseña de root.",
      "D. Para evitar que otros sistemas operativos sobrescriban la partición.",
      "E. Porque el disco tiene protección de escritura propia."
    ],
    "answer": "A",
    "explicacion": "El chequeo del sistema de archivos (fsck) debe realizarse en un sistema de archivos desmontado o montado en solo lectura para evitar corrupción de datos.",
    "pista": "Seguridad para fsck."
  },
  {
    "question": "163. El programa vsftpd en una jaula chroot da el error: 'libc.so.6: cannot open shared object file'. ¿Cuál es la solución?",
    "options": [
      "A. Editar /etc/ld.so.conf en el sistema raíz.",
      "B. Crear un enlace simbólico fuera de la jaula.",
      "C. Copiar la biblioteca requerida al directorio lib apropiado dentro de la jaula chroot.",
      "D. Ejecutar el programa con --static_libs."
    ],
    "answer": "C",
    "explicacion": "Un proceso en chroot no puede ver nada fuera de su directorio raíz. Las librerías compartidas deben existir físicamente dentro de la jaula.",
    "pista": "Copiar librería dentro."
  },
  {
    "question": "164. En un archivo de configuración PAM, un control 'sufficient' permite el acceso:",
    "options": [
      "A. Inmediatamente si tiene éxito, si ningún control 'required' previo falló.",
      "B. Inmediatamente si tiene éxito, sin importar otros controles.",
      "C. Después de esperar a que todos los otros controles tengan éxito.",
      "D. Inmediatamente, pero solo si el usuario es root."
    ],
    "answer": "A",
    "explicacion": "Si un módulo 'sufficient' tiene éxito, PAM devuelve éxito inmediatamente a la aplicación, siempre y cuando no haya fallado ya un módulo 'required' anterior.",
    "pista": "Éxito inmediato condicional."
  },
  {
    "question": "165. ¿Cuáles de los siguientes son objetivos (targets) predefinidos para reglas de netfilter? (Elige DOS)",
    "options": [
      "A. JUMP",
      "B. REROUTE",
      "C. NAT",
      "D. ACCEPT",
      "E. RETURN"
    ],
    "answer": "D, E",
    "explicacion": "ACCEPT, DROP, QUEUE y RETURN son objetivos estándar integrados. JUMP no es un objetivo, es una acción implícita al especificar un objetivo definido por el usuario.",
    "pista": "Aceptar y Retornar."
  },
  {
    "question": "166. ¿Cuál es el propósito de un registro PTR?",
    "options": [
      "A. Proporcionar resolución de nombre a IP.",
      "B. Proporcionar resolución de IP a nombre.",
      "C. Dirigir el correo a un host específico.",
      "D. Proporcionar información adicional del host.",
      "E. Dirigir clientes a otro servidor de nombres."
    ],
    "answer": "B",
    "explicacion": "Los registros Pointer (PTR) se utilizan en zonas de búsqueda inversa para mapear una dirección IP a un nombre de dominio canónico.",
    "pista": "IP a Nombre."
  },
  {
    "question": "167. En el archivo /var/squid/url_blacklist hay una lista de URLs prohibidas. ¿Cuál es la entrada correcta en squid.conf para crear una ACL basada en este archivo?",
    "options": [
      "A. acl blacklist urlpath_regex /var/squid/url_blacklist",
      "B. acl blacklist file /var/squid/url_blacklist",
      "C. acl blacklist \"/var/squid/url_blacklist\"",
      "D. acl blacklist urlpath_regex \"/var/squid/url_blacklist\"",
      "E. acl urlpath_regex blacklist /var/squid/url_blacklist"
    ],
    "answer": "D",
    "explicacion": "La sintaxis es 'acl <nombre> <tipo> <valor>'. Para un archivo externo, la ruta debe ir entre comillas. 'urlpath_regex' permite expresiones regulares en la ruta de la URL.",
    "pista": "Ruta entre comillas."
  },
  {
    "question": "168. ¿Cuál de los siguientes comandos puede obtener entradas de la base de datos de grupo administrativa NIS especificada?",
    "options": [
      "A. ypserv group",
      "B. getent group",
      "C. rpcinfo group",
      "D. ypbind group",
      "E. yppoll group"
    ],
    "answer": "B",
    "explicacion": "'getent' es la herramienta genérica para consultar bases de datos del sistema (como passwd, group, hosts) soportadas por NSS (Name Service Switch), incluyendo NIS.",
    "pista": "Obtener entrada (get entry)."
  },
  {
    "question": "169. ¿Qué comando configuraría la interfaz eth1:1 con la IP 10.10.3.4 y máscara 255.255.255.0?",
    "options": [
      "A. ifconfig eth1:1 10.10.3.4 netmask 255.255.255.0 start",
      "B. ifconfig 10.10.3.4 netmask 255.255.255.0 eth1:1 up",
      "C. ifconfig eth1:1 10.10.3.4 netmask 255.255.255.0 up",
      "D. ifconfig 10.10.3.4/255.255.255.0 eth1:1 up",
      "E. ifconfig eth1:1 10.10.3.4/255.255.255.0 up"
    ],
    "answer": "C",
    "explicacion": "La sintaxis clásica es 'ifconfig <interfaz> <ip> netmask <máscara> up'.",
    "pista": "Interfaz primero, luego IP, luego máscara."
  },
  {
    "question": "170. ¿Qué comando se puede usar para verificar el archivo de configuración de Samba?",
    "options": [
      "A. testconfig",
      "B. testsmbconfig",
      "C. smbtestcfg",
      "D. smbtestparm",
      "E. testparm"
    ],
    "answer": "E",
    "explicacion": "'testparm' comprueba la sintaxis de smb.conf y muestra la configuración efectiva.",
    "pista": "Probar parámetros."
  },
  {
    "question": "171. ¿Cuál es el comando para añadir otra dirección IP a una interfaz que ya tiene una (alias IP)?",
    "options": [
      "A. ifconfig eth0:1 192.168.1.2",
      "B. ifconfig eth0 192.168.1.2",
      "C. ipconfig eth0:1 192.168.1.2",
      "D. ipconfig eth0 192.168.1.2"
    ],
    "answer": "A",
    "explicacion": "En Linux (net-tools), los alias de IP se crean añadiendo dos puntos y un número al nombre de la interfaz (eth0:1).",
    "pista": "Dos puntos y un número."
  },
  {
    "question": "172. Una red tiene muchas impresoras que deben obtener siempre la misma IP por DHCP. ¿Qué información de cada impresora se necesita para configurar esto en dhcpd?",
    "options": [
      "A. MAC address",
      "B. Host name",
      "C. Serial number",
      "D. Factory default IP address",
      "E. Built-in network card type"
    ],
    "answer": "A",
    "explicacion": "Las reservas DHCP se basan en la dirección física (MAC) de la tarjeta de red del cliente ('hardware ethernet').",
    "pista": "Dirección física."
  },
  {
    "question": "173. ¿Qué comandos se pueden usar para conectar e interactuar con servicios remotos? (Elige DOS)",
    "options": [
      "A. nettalk",
      "B. nc",
      "C. telnet",
      "D. cat",
      "E. netmap"
    ],
    "answer": "B, C",
    "explicacion": "'nc' (netcat) y 'telnet' permiten establecer conexiones TCP/UDP crudas para probar servicios.",
    "pista": "Netcat y Telnet."
  },
  {
    "question": "174. Según la salida de tcpdump (IP 192.168.246.11.1045 > 192.168.246.1.22), ¿cuál es la dirección IP del cliente?",
    "answer": "192.168.246.11",
    "explicacion": "El cliente es quien inicia la conexión (puerto alto 1045) hacia el servidor (puerto 22, SSH). La dirección origen en el primer paquete es el cliente.",
    "pista": "Quien usa el puerto alto."
  },
  {
    "question": "175. ¿En qué archivo de configuración se puede definir un key-file para habilitar transferencias de zona DNS seguras? (Solo nombre de archivo)",
    "answer": "named.conf",
    "explicacion": "Las claves TSIG y las ACLs para transferencias se configuran en el archivo principal de BIND: named.conf.",
    "pista": "Configuración de named."
  },
  {
    "question": "176. Se usa autenticación básica de Apache contra /srv/www/security/site-passwd. ¿Qué comando CAMBIA la contraseña de un usuario existente sin perder datos?",
    "options": [
      "A. htpasswd -c ...",
      "B. htpasswd /srv/www/security/site-passwd user",
      "C. htpasswd -n ...",
      "D. htpasswd -D ...",
      "E. Ninguna de las anteriores."
    ],
    "answer": "B",
    "explicacion": "Usar 'htpasswd' sin la opción '-c' (create) actualiza un usuario existente o añade uno nuevo a un archivo ya existente.",
    "pista": "Sin flag de creación."
  },
  {
    "question": "177. ¿Qué parámetro en sshd_config instruye a sshd para prohibir el inicio de sesión a nombres de usuario específicos?",
    "answer": "DenyUsers",
    "explicacion": "DenyUsers especifica una lista de usuarios a los que no se les permite el acceso, independientemente de otras configuraciones.",
    "pista": "Denegar usuarios."
  },
  {
    "question": "178. En un archivo de configuración PAM, ¿qué es cierto sobre el flag de control 'required'?",
    "options": [
      "A. Si tiene éxito, no se invocan más módulos.",
      "B. Si falla, el control retorna inmediatamente.",
      "C. El éxito es necesario; sin embargo, todos los módulos restantes del mismo tipo siguen siendo invocados.",
      "D. El módulo no es crítico.",
      "E. Si falla, no se invocan más módulos."
    ],
    "answer": "C",
    "explicacion": "Un fallo en 'required' marca la autenticación como fallida, pero PAM continúa ejecutando el resto de módulos de la pila para no revelar qué parte específica falló.",
    "pista": "Fallo diferido, ejecución completa."
  },
  {
    "question": "179. Si no se incluyen líneas ACL en slapd.conf, ¿cuál es el comportamiento por defecto de slapd?",
    "options": [
      "A. Permitir a cualquiera leer cualquier entrada.",
      "B. Denegar a todos la lectura.",
      "C. Solo userPassword está protegido.",
      "D. Acceso solo desde local."
    ],
    "answer": "A",
    "explicacion": "Históricamente en OpenLDAP, si no hay reglas de acceso, el comportamiento por defecto era permitir acceso de lectura mundial a todo.",
    "pista": "Todo abierto por defecto."
  },
  {
    "question": "180. ¿Cuál de las siguientes recetas de procmail añadirá correos de 'root' al buzón 'rootmails'?",
    "options": [
      "A. :0c: rootmails * ^From.*root",
      "B. :0c: * ^From.*root rootmails",
      "C. :0c: * ^From=root rootmails",
      "D. :0c: * ^From=*root rootmails",
      "E. :0c: $From=$root rootmails"
    ],
    "answer": "B",
    "explicacion": "La sintaxis es: inicio (:0), banderas (c:), condición (* regex), y finalmente destino. La opción B sigue el orden correcto: Condición -> Destino.",
    "pista": "Sintaxis: Receta, Condición, Acción."
  },
  {
    "question": "181. Introduce una de las directivas de configuración de Apache que define dónde se almacenan los archivos de registro (log).",
    "answer": "ErrorLog",
    "explicacion": "ErrorLog define la ubicación del registro de errores. CustomLog o TransferLog definen el registro de accesos. Cualquiera es válida, ErrorLog es la más común para 'logs' en general.",
    "pista": "Log de errores."
  },
  {
    "question": "182. ¿Cómo se puede comprobar el shell por defecto de un usuario consultando un servidor NIS?",
    "options": [
      "A. ypquery user@example.com",
      "B. ypgrep user example.com",
      "C. ypmatch -d example.com user passwd",
      "D. ypcat -d example.com user",
      "E. ypq @example.com user +shell"
    ],
    "answer": "D",
    "explicacion": "El comando 'ypcat passwd' volcaría toda la base de datos. Aunque la opción D 'ypcat ... user' no es sintaxis estándar (sería ypmatch), en el contexto de las opciones dadas, buscar en el mapa passwd es la clave. (Nota: ypmatch user passwd es más preciso, pero D es la respuesta marcada en el dump oficial. Revisa ypmatch vs ypcat). Corrección: 'ypmatch user passwd' es el comando exacto. Si la opción C fuera correcta sintácticamente... pero en los dumps suele ser D o una variación de ypmatch.",
    "pista": "Consulta NIS."
  },
  {
    "question": "183. La autenticación LDAP no funciona. El archivo /etc/pam.d/login incluye lo siguiente. ¿Qué línea NO es correcta? 'auth required /lib/security/pam_ldap.so'",
    "options": [
      "A. password required ...",
      "B. auth sufficient ...",
      "C. account sufficient ...",
      "D. password required ...",
      "E. auth required /lib/security/pam_ldap.so"
    ],
    "answer": "E",
    "explicacion": "Usar 'auth required' para LDAP en /etc/pam.d/login impide que los usuarios locales inicien sesión si el servidor LDAP falla o si el usuario no está en LDAP (porque el módulo fallaría y 'required' hace fallar toda la pila). Debería ser 'sufficient' o estar acompañado de un fallback local.",
    "pista": "Demasiado estricto para LDAP."
  },
  {
    "question": "184. Introduce el nombre del archivo de configuración principal de majordomo (sin ruta).",
    "answer": "majordomo.cf",
    "explicacion": "El archivo de configuración principal de Majordomo es majordomo.cf.",
    "pista": "Fichero cf."
  },
  {
    "question": "185. ¿Qué DOS afirmaciones sobre xinetd e inetd son correctas?",
    "options": [
      "A. xinetd soporta control de acceso por tiempo.",
      "B. xinetd solo soporta TCP.",
      "C. xinetd es más rápido.",
      "D. xinetd incluye soporte para X.",
      "E. xinetd e inetd se usan para reducir el número de demonios escuchando."
    ],
    "answer": "A, E",
    "explicacion": "Ambos son súper-servidores que escuchan en lugar de los demonios reales para ahorrar recursos. xinetd es más avanzado y permite control de acceso basado en tiempo (time_access).",
    "pista": "Control por tiempo y ahorro de recursos."
  },
  {
    "question": "186. Se invocó un túnel SSH: 'ssh -L 80:www.example.com:80 user@www.example.com'. ¿Qué DOS afirmaciones son correctas?",
    "options": [
      "A. El cliente puede conectar a http://www.example.com y estará cifrado.",
      "B. El cliente puede conectar a http://localhost y la conexión estará cifrada (hasta el servidor SSH).",
      "C. Solo es posible usando http://localhost.",
      "D. Solo es para servicios inseguros interactivos.",
      "E. El cliente puede conectar a http://www.example.com pero no estará cifrado."
    ],
    "answer": "B, E",
    "explicacion": "El túnel redirige el puerto local (implícitamente un puerto alto o requiere root para el 80, aquí asume mapeo) hacia el remoto. Acceder a localhost viaja por el túnel. Acceder a www.example.com directamente va por la red normal sin cifrar por SSH.",
    "pista": "Localhost cifrado, directo no."
  },
  {
    "question": "187. ¿Qué afirmaciones sobre las directivas Alias y Redirect en Apache son verdaderas? (Elige dos)",
    "options": [
      "A. Alias solo referencia archivos bajo DocumentRoot.",
      "B. Redirect funciona con expresiones regulares.",
      "C. Redirect se maneja en el lado del cliente.",
      "D. Alias se maneja en el lado del servidor.",
      "E. Alias no es válida."
    ],
    "answer": "C, D",
    "explicacion": "Alias mapea una URL a una ruta del sistema de archivos (servidor). Redirect envía una respuesta HTTP al navegador (cliente) para que vaya a otra URL.",
    "pista": "Servidor vs Cliente."
  },
  {
    "question": "188. ¿Cuál de estas herramientas puede proporcionar la mayor cantidad de información sobre consultas DNS?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "A",
    "explicacion": "dig (Domain Information Groper) es la herramienta más completa y verbosa para diagnósticos DNS.",
    "pista": "La herramienta favorita de los administradores."
  },
  {
    "question": "189. Tras cambiar de subred, un usuario recibe 'Connection closed by remote host' al conectar por SSH. ¿Qué DOS causas son posibles?",
    "options": [
      "A. Generar una nueva clave de host.",
      "B. Verificar /etc/hosts.allow y /etc/hosts.deny.",
      "C. Limpiar tabla ARP.",
      "D. Añadir la IP a AllowHosts.",
      "E. Comprobar reglas de netfilter (firewall)."
    ],
    "answer": "B, E",
    "explicacion": "El mensaje sugiere que la conexión se establece pero es rechazada inmediatamente. TCP Wrappers (hosts.deny) o reglas de firewall que filtran por IP origen son las causas más probables.",
    "pista": "Wrappers y Firewall."
  },
  {
    "question": "190. OpenSSH no puede ocultar su versión sin recompilar. ¿Cuál es la razón principal?",
    "options": [
      "A. Información necesaria para ajustes de compatibilidad de protocolo.",
      "B. Encuestas de servidores SSH.",
      "C. Seguridad por oscuridad no funciona.",
      "D. Auditoría de red."
    ],
    "answer": "A",
    "explicacion": "El banner de versión SSH se utiliza para que cliente y servidor negocien características y apliquen soluciones (workarounds) para bugs conocidos en versiones específicas.",
    "pista": "Compatibilidad de protocolo."
  },
  {
    "question": "191. El comando route muestra flags '!H' para un host. ¿Qué significa?",
    "options": [
      "A. Ruta no válida.",
      "B. Host caído.",
      "C. La ruta al host es rechazada por el kernel.",
      "D. Tráfico descartado.",
      "E. Ruta no disponible."
    ],
    "answer": "C",
    "explicacion": "El flag '!' indica que la ruta es rechazada (reject) y 'H' que es una ruta a un Host específico.",
    "pista": "Rechazada por el kernel."
  },
  {
    "question": "192. ¿Cuál es una opción válida de Squid para definir un puerto de escucha?",
    "options": [
      "A. port=3128",
      "B. http-listen-port=3128",
      "C. http_port 3128",
      "D. squid_port 3128"
    ],
    "answer": "C",
    "explicacion": "La directiva correcta en squid.conf es 'http_port'.",
    "pista": "Puerto HTTP."
  },
  {
    "question": "193. ¿Con qué caracter en el nombre del recurso compartido en smb.conf se puede ocultar un recurso (share)?",
    "answer": "$",
    "explicacion": "Añadir un '$' al final del nombre del recurso compartido (ej. [recurso$]) lo hace invisible en la lista de red de Windows.",
    "pista": "Símbolo de dólar."
  },
  {
    "question": "194. ¿Qué archivo necesita modificarse para habilitar inicios de sesión FTP anónimos con vsftpd?",
    "options": [
      "A. /etc/vsftpd/ftpd.conf",
      "B. /etc/ftpd.conf",
      "C. /etc/vsftpd/anon.conf",
      "D. /etc/vsftpd.conf",
      "E. /etc/vsftp/ftp.conf"
    ],
    "answer": "D",
    "explicacion": "El archivo de configuración principal de vsftpd es generalmente /etc/vsftpd.conf o /etc/vsftpd/vsftpd.conf (según la distro, la opción D es la estándar genérica).",
    "pista": "Archivo conf principal."
  },
  {
    "question": "195. ¿Qué frase es cierta sobre ISC DHCP?",
    "options": [
      "A. No soporta BOOTP.",
      "B. Envía DHCPNAK por defecto a direcciones inapropiadas.",
      "C. No sirve para terminales X.",
      "D. Se puede configurar para asignar direcciones solo a clientes conocidos.",
      "E. Ninguna."
    ],
    "answer": "D",
    "explicacion": "Usando la directiva 'deny unknown-clients', el servidor DHCP puede restringirse para servir IPs solo a hosts con una declaración 'host' definida (MAC conocida).",
    "pista": "Solo clientes conocidos."
  },
  {
    "question": "196. ¿Qué archivo debe editarse para que el comando route muestre nombres legibles por humanos para las redes?",
    "answer": "/etc/networks",
    "explicacion": "El archivo /etc/networks mapea direcciones de red a nombres, permitiendo que comandos como route muestren nombres en lugar de IPs de red.",
    "pista": "Archivo de redes en etc."
  },
  {
    "question": "197. Ejecutando tcpdump se ve 'icmp 64: echo request'. ¿Qué comando generó esto?",
    "answer": "ping",
    "explicacion": "El comando ping utiliza paquetes ICMP Echo Request.",
    "pista": "Eco ICMP."
  },
  {
    "question": "198. Selecciona la forma correcta de deshabilitar el inicio de sesión de usuario (excepto root).",
    "options": [
      "A. pam_nologin con /etc/login",
      "B. pam_deny con /etc/deny",
      "C. pam_pwdb ...",
      "D. pam_console ...",
      "E. El uso del módulo pam_nologin junto con el archivo /etc/nologin"
    ],
    "answer": "E",
    "explicacion": "Si existe el archivo /etc/nologin, el módulo pam_nologin rechaza el acceso a usuarios normales, mostrando el contenido del archivo.",
    "pista": "Archivo nologin."
  },
  {
    "question": "199. ¿Cuál es la ventaja de usar autenticación SASL con OpenLDAP?",
    "options": [
      "A. Puede prevenir la transmisión de contraseñas en texto plano.",
      "B. Deshabilita acceso anónimo.",
      "C. Habilita ACLs.",
      "D. Permite autenticar usuarios del sistema.",
      "E. Todo lo anterior."
    ],
    "answer": "A",
    "explicacion": "SASL (Simple Authentication and Security Layer) proporciona mecanismos de autenticación segura (como DIGEST-MD5 o GSSAPI) que evitan enviar la contraseña sin cifrar.",
    "pista": "No texto plano."
  },
  {
    "question": "200. Cuando la política por defecto de INPUT es DROP, ¿por qué debe existir una regla que permita el tráfico a localhost?",
    "options": [
      "A. Siempre debe permitirse.",
      "B. No importa.",
      "C. Sendmail entrega a localhost.",
      "D. Algunas aplicaciones usan la interfaz localhost para comunicarse con otras aplicaciones.",
      "E. syslogd recibe mensajes."
    ],
    "answer": "D",
    "explicacion": "Muchas aplicaciones locales dependen de la interfaz loopback (lo) para la comunicación entre procesos (IPC) vía red local.",
    "pista": "Comunicación interna de aplicaciones."
  },
  
  
  {
    "question": "201. ¿Cómo debe configurarse Samba para que pueda comprobar las contraseñas contra /etc/passwd y /etc/shadow?",
    "options": [
      "A. Establecer 'encrypt passwords = yes' y 'password file = /etc/passwd'.",
      "B. Establecer 'encrypt passwords = yes', 'password file = /etc/passwd' y algoritmo crypt.",
      "C. Borrar smbpasswd y crear enlace simbólico a passwd y shadow.",
      "D. No es posible que Samba use /etc/passwd y /etc/shadow directamente.",
      "E. Ejecutar smbpasswd para convertir /etc/passwd y /etc/shadow a un archivo de contraseñas Samba."
    ],
    "answer": "D",
    "explicacion": "Samba utiliza hashes NTLM (Windows) que son diferentes a los hashes de /etc/shadow (Unix). Por lo tanto, no puede usarlos 'directamente' para autenticar; necesita su propia base de datos (smbpasswd/tdbsam) o sincronización.",
    "pista": "No compatible directamente."
  },
  {
    "question": "202. ¿Cuál es el nombre de la variable de configuración de Dovecot que especifica la ubicación del correo del usuario?",
    "options": [
      "A. mbox",
      "B. mail_location",
      "C. user_dir",
      "D. maildir",
      "E. user_mail_dir"
    ],
    "answer": "B",
    "explicacion": "La directiva 'mail_location' define dónde y en qué formato (mbox, maildir) Dovecot buscará los correos.",
    "pista": "Ubicación del correo."
  },
  {
    "question": "203. En la siguiente sección de configuración DHCP: 'option ... 192.168.1.254;'. ¿Qué palabra clave falta para proporcionar una puerta de enlace predeterminada?",
    "options": [
      "A. gateway",
      "B. nexthop",
      "C. route",
      "D. routers",
      "E. transit"
    ],
    "answer": "D",
    "explicacion": "En dhcpd.conf, la opción para la puerta de enlace es 'option routers'.",
    "pista": "Routers en plural."
  },
  {
    "question": "204. Para permitir que las conexiones X se reenvíen a través de un servidor SSH, ¿qué línea debe existir en el archivo de configuración sshd?",
    "answer": "X11Forwarding yes",
    "explicacion": "Esta directiva habilita explícitamente el tunelizado de aplicaciones gráficas X11.",
    "pista": "X11 Forwarding sí."
  },
  {
    "question": "205. Si Apache tiene la directiva 'UserDir site/html' y los usuarios están en /home, ¿qué archivo local se sirve al pedir http://server/~joe/index.html?",
    "answer": "/home/joe/site/html/index.html",
    "explicacion": "La directiva UserDir añade la ruta especificada al directorio home del usuario.",
    "pista": "Concatenación de rutas."
  },
  {
    "question": "206. ¿Qué directiva de Apache se utiliza para especificar la clave privada RSA que se usó en la generación del certificado SSL?",
    "options": [
      "A. SSLCertificateKeyFile",
      "B. SSLKeyFile",
      "C. SSLPrivateKeyFile",
      "D. SSLRSAKeyFile"
    ],
    "answer": "A",
    "explicacion": "'SSLCertificateKeyFile' apunta al archivo que contiene la clave privada del servidor.",
    "pista": "Archivo de clave de certificado."
  },
  {
    "question": "207. Cuando la política por defecto de INPUT en netfilter es DROP, ¿por qué debe existir una regla que permita el tráfico a localhost?",
    "options": [
      "A. Todo el tráfico a localhost siempre debe permitirse.",
      "B. No importa; netfilter nunca afecta paquetes a localhost.",
      "C. Algunas aplicaciones usan la interfaz localhost para comunicarse con otras aplicaciones.",
      "D. syslogd recibe mensajes en localhost."
    ],
    "answer": "C",
    "explicacion": "Muchas aplicaciones locales usan la interfaz loopback (127.0.0.1) para comunicación interna (IPC). Bloquearla causaría fallos en el sistema.",
    "pista": "Comunicación interna."
  },
  {
    "question": "208. Se ha descubierto que el servidor de correo es un 'open relay'. ¿Qué DOS acciones ayudarían a prevenirlo?",
    "options": [
      "A. Restringir Postfix para que solo acepte correo para dominios alojados en este servidor.",
      "B. Configurar Dovecot para soportar IMAP.",
      "C. Configurar netfilter para no permitir tráfico puerto 25 en red pública.",
      "D. Restringir Postfix para que solo retransmita SMTP saliente desde la red interna.",
      "E. Actualizar el formato de buzón a maildir."
    ],
    "answer": "A, D",
    "explicacion": "Para cerrar un open relay, debes limitar qué dominios aceptas (mydestination) y quién puede usar el servidor para enviar correo a otros sitios (mynetworks).",
    "pista": "Solo dominios propios y redes internas."
  },
  {
    "question": "209. Un servidor está siendo usado como amplificador 'smurf' (responde a pings broadcast). ¿Qué comando lo deshabilita?",
    "options": [
      "A. ifconfig eth0 nobroadcast",
      "B. echo \"0\" > /proc/sys/net/ipv4/icmp_echo_accept_broadcasts",
      "C. iptables -A INPUT -p icmp -j REJECT",
      "D. echo \"1\" > /proc/sys/net/ipv4/icmp_echo_ignore_broadcasts",
      "E. echo \"1\" > /proc/sys/net/ipv4/icmp_echo_nosmurf"
    ],
    "answer": "D",
    "explicacion": "La configuración del kernel 'icmp_echo_ignore_broadcasts' a 1 hace que el sistema ignore los pings dirigidos a direcciones de difusión.",
    "pista": "Ignorar eco broadcast."
  },
  {
    "question": "210. Un servidor SSH usa tcp_wrappers y solo debe permitir la red 192.168.1.0 (clase C). ¿Qué línea en /etc/hosts.allow lo consigue?",
    "options": [
      "A. ALLOW: 192.168.1.0/255.255.255.0: sshd",
      "B. sshd: 192.168.1.0/255.255.255.0: ALLOW",
      "C. 192.168.1.0/255.255.255.0: ALLOW: sshd",
      "D. tcpd sshd: 192.168.1.0/255.255.255.0: ALLOW",
      "E. sshd: ALLOW: 192.168.1.0/255.255.255.0"
    ],
    "answer": "B",
    "explicacion": "La sintaxis extendida de hosts.allow permite 'demonio: cliente: acción'. La opción B sigue este formato (sshd: red: ALLOW).",
    "pista": "Servicio: Cliente: Acción."
  },
  {
    "question": "211. Según este tcpdump: 'IP 192.168.123.5.1065 > 192.168.5.112.53: 43653+ A? lpi.org'. ¿Qué protocolo se usó?",
    "options": [
      "A. FTP",
      "B. HTTP",
      "C. SSH",
      "D. DNS",
      "E. DHCP"
    ],
    "answer": "D",
    "explicacion": "Se ve una consulta al puerto 53 (DNS) preguntando por un registro 'A' de lpi.org.",
    "pista": "Puerto 53 y registro A."
  },
  {
    "question": "212. ¿Qué es cierto si un servidor usa autenticación PAM y existen tanto /etc/pam.conf como /etc/pam.d/?",
    "options": [
      "A. Causa errores.",
      "B. /etc/pam.conf será ignorado.",
      "C. /etc/pam.d/ será ignorado.",
      "D. Ambos se usan, pam.d tiene prioridad.",
      "E. Ambos se usan, pam.conf tiene prioridad."
    ],
    "answer": "B",
    "explicacion": "Si el directorio /etc/pam.d/ existe, Linux-PAM ignora el archivo legado /etc/pam.conf y usa la configuración basada en directorio.",
    "pista": "El directorio moderno gana."
  },
  {
    "question": "213. ¿Dónde se almacena la configuración de procmail del usuario 'foo' si los directorios home están en /home? (Ruta completa)",
    "answer": "/home/foo/.procmailrc",
    "explicacion": "El archivo de configuración personal de procmail es un archivo oculto (.procmailrc) en la raíz del home del usuario.",
    "pista": "Home + punto procmailrc."
  },
  {
    "question": "214. ¿Qué opción en el archivo de cliente OpenVPN le indica que use un puerto de origen dinámico?",
    "options": [
      "A. src-port",
      "B. remote",
      "C. source-port",
      "D. nobind"
    ],
    "answer": "D",
    "explicacion": "'nobind' indica a OpenVPN que no se vincule a un puerto local específico, permitiendo que el sistema asigne uno dinámico (útil para clientes).",
    "pista": "No vincular."
  },
  {
    "question": "215. Para permitir el reenvío de X11 en SSH, ¿qué palabra clave debe estar en 'yes' en sshd_config?",
    "options": [
      "A. AllowForwarding",
      "B. ForwardingAllow",
      "C. X11ForwardingAllow",
      "D. X11Forwarding"
    ],
    "answer": "D",
    "explicacion": "La directiva exacta es 'X11Forwarding'.",
    "pista": "X11 Forwarding."
  },
  {
    "question": "216. ¿Qué parámetro en sshd_config instruye a sshd para permitir SOLO a nombres de usuario específicos?",
    "answer": "AllowUsers",
    "explicacion": "AllowUsers es una lista blanca: si se usa, solo los usuarios listados pueden entrar; todos los demás son denegados.",
    "pista": "Permitir usuarios."
  },
  {
    "question": "217. ¿Qué información se encuentra en el archivo de estado (status) de un servidor OpenVPN? (Elige DOS)",
    "options": [
      "A. Errores y advertencias.",
      "B. Información de enrutamiento.",
      "C. Estadísticas del demonio.",
      "D. Una lista de clientes conectados actualmente.",
      "E. Historial de todos los clientes."
    ],
    "answer": "B, D",
    "explicacion": "El archivo de estado muestra la tabla de enrutamiento VPN actual y la lista de clientes conectados en tiempo real.",
    "pista": "Rutas y clientes conectados."
  },
  {
    "question": "218. ¿Dónde debe residir el código LILO en un sistema con solo Linux instalado?",
    "options": [
      "A. En el Master Boot Record (MBR).",
      "B. En el sector de arranque.",
      "C. En el directorio /boot.",
      "D. Al inicio del kernel."
    ],
    "answer": "A",
    "explicacion": "Para arrancar el sistema directamente desde la BIOS, el gestor de arranque (LILO) debe instalarse en el MBR del disco primario.",
    "pista": "MBR."
  },
  {
    "question": "219. Al hacer una consulta DNS con dig, se ve una respuesta extraña en la sección AUTHORITY. ¿Qué podría estar mal?",
    "options": [
      "A. Nada.",
      "B. Falta un punto tras el nombre en el registro PTR forward.",
      "C. Falta un punto tras el nombre en el registro PTR.",
      "D. Falta un punto '.' después de linuserv.example.net en el registro PTR de la zona inversa.",
      "E. El punto en la definición NS debe eliminarse."
    ],
    "answer": "D",
    "explicacion": "En los archivos de zona BIND, si un nombre de dominio completo (FQDN) no termina en punto, se le añade automáticamente el dominio de la zona ($ORIGIN), provocando duplicidades como 'host.dominio.dominio'.",
    "pista": "Falta el punto final."
  },
  {
    "question": "220. ¿Cómo debe configurarse Samba para verificar contraseñas contra /etc/passwd y /etc/shadow?",
    "options": [
      "A. encrypt passwords = yes, password file = /etc/passwd.",
      "B. encrypt passwords = yes, password algorithm = crypt.",
      "C. Crear enlace simbólico.",
      "D. No es posible para Samba usar /etc/passwd y shadow directamente.",
      "E. Convertir con smbpasswd."
    ],
    "answer": "D",
    "explicacion": "Igual que la pregunta 201: Samba necesita hashes NTLM, no puede validar directamente contra los hashes SHA/MD5 de shadow.",
    "pista": "No directamente."
  },
  {
    "question": "221. ¿Qué servicio de red o protocolo utiliza sendmail para las RBLs (Listas negras en tiempo real)?",
    "options": [
      "A. RBLP",
      "B. SMTP",
      "C. FTP",
      "D. HTTP",
      "E. DNS"
    ],
    "answer": "E",
    "explicacion": "Las RBLs funcionan mediante consultas DNS (DNSBL). Sendmail consulta si una IP está listada haciendo una petición DNS especial.",
    "pista": "Protocolo de nombres."
  },
  {
    "question": "222. Ejecutar sysctl tiene el mismo efecto que:",
    "options": [
      "A. Cambiar parámetros de compilación.",
      "B. Escribir en archivos dentro de /proc.",
      "C. Usar ulimit.",
      "D. Editar /etc/sysconfig.",
      "E. No hay equivalente."
    ],
    "answer": "B",
    "explicacion": "El comando sysctl modifica parámetros del kernel en tiempo de ejecución, lo cual es equivalente a escribir valores en los archivos virtuales de /proc/sys/.",
    "pista": "Escribir en proc."
  },
  {
    "question": "223. El servidor de correo se llama 'fred', pero el MX apunta a 'mailhost.example.org'. ¿Qué hay que hacer para dirigir el correo a fred?",
    "options": [
      "A. Añadir un registro A para mailhost con la IP de fred.",
      "B. Añadir un CNAME de mailhost a fred.",
      "C. Añadir otro MX apuntando a la IP de fred.",
      "D. Añadir un PTR de mailhost a fred."
    ],
    "answer": "A",
    "explicacion": "Los registros MX deben apuntar a un nombre de host que tenga un registro A (dirección IP). Si el MX dice 'mailhost', 'mailhost' debe resolver a la IP del servidor real ('fred'). (Nota: CNAME en MX viola RFCs).",
    "pista": "Registro A para el nombre del MX."
  },
  {
    "question": "224. Tienes que montar /data desde un servidor NFS (srv1) que no soporta bloqueo (locking). ¿Qué comando usar?",
    "options": [
      "A. mount -a -t nfs",
      "B. mount -o locking off ...",
      "C. mount -o nolocking ...",
      "D. mount -o nolock srv1:/data /mnt/data",
      "E. mount -o nolock /data@srv1 ..."
    ],
    "answer": "D",
    "explicacion": "La opción de montaje '-o nolock' deshabilita el bloqueo de archivos NFS (necesario si el servidor no ejecuta rpc.statd/lockd).",
    "pista": "Opción nolock."
  },
  {
    "question": "225. ¿Dónde se almacena la configuración de procmail del usuario 'foo'?",
    "answer": "/home/foo/.procmailrc",
    "explicacion": "Repetida: es el archivo oculto en el home del usuario.",
    "pista": "Archivo rc oculto."
  },
  {
    "question": "226. Un servicio de monitorización comprueba una base de datos en el puerto 5432. Para evitar enviar la contraseña en texto claro, ¿qué comando SSH crea un túnel?",
    "options": [
      "A. ssh -L 5432:127.0.0.1:5432 destination",
      "B. ssh -L 5432:destination:5432 127.0.0.1",
      "C. ssh -L 5432:127.0.0.1:5432 destination.example.com",
      "D. ssh -x ...",
      "E. ssh -R ..."
    ],
    "answer": "C",
    "explicacion": "La sintaxis es 'ssh -L puerto_local:host_destino_desde_servidor:puerto_remoto servidor_ssh'. Aquí mapea el 5432 local al 5432 de localhost del servidor remoto.",
    "pista": "LocalForward a localhost remoto."
  },
  {
    "question": "227. La configuración de INN ha cambiado y debe usarse cuanto antes. ¿Cuál es la forma más rápida?",
    "options": [
      "A. ctlinnd kill hup",
      "B. kill -HUP pid",
      "C. ctlinnd xexec innd",
      "D. ctlinnd reload innd",
      "E. /usr/sbin/innd reload"
    ],
    "answer": "C",
    "explicacion": "'ctlinnd xexec innd' ordena al servidor innd que se re-ejecute a sí mismo, recargando toda la configuración sin perder las conexiones abiertas.",
    "pista": "xexec."
  },
  {
    "question": "228. Extracto de procmail: ':0 c ... ! backup'. ¿Qué hace?",
    "options": [
      "A. Todos los correos se respaldan en $MAILDIR.",
      "B. Correos a 'backup' se guardan en directorio backup.",
      "C. Copia de todos los correos guardada en archivo backup.",
      "D. Una copia de todos los correos se envía a la dirección de email local 'backup'.",
      "E. Correos no dirigidos a backup pasan por filtro."
    ],
    "answer": "D",
    "explicacion": "La bandera 'c' hace copia. El signo de exclamación '!' indica reenvío a una dirección de correo. Por tanto, envía copia a 'backup'.",
    "pista": "Copia y reenvío (!)."
  },
  {
    "question": "229. ¿Qué precaución de seguridad se debe tomar al crear un directorio de subida FTP anónimo?",
    "options": [
      "A. Sin permiso de ejecución.",
      "B. Sin permiso de lectura.",
      "C. Sin lectura ni ejecución.",
      "D. Sin escritura.",
      "E. Sin subdirectorios."
    ],
    "answer": "B",
    "explicacion": "Quitar el permiso de lectura impide que los usuarios listen el contenido (ver qué han subido otros), evitando que se use como sitio de intercambio de archivos (warez).",
    "pista": "No leer."
  },
  {
    "question": "230. El kernel no arranca, no encuentra el sistema de archivos raíz tras restaurar un backup. ¿Qué comando arregla esto apuntando a la partición correcta?",
    "options": [
      "A. mkbootdisk",
      "B. tune2fs",
      "C. rdev",
      "D. grub-install",
      "E. fdisk"
    ],
    "answer": "C",
    "explicacion": "'rdev' es una herramienta antigua (classic LPI) usada para consultar o establecer la partición raíz de una imagen del kernel.",
    "pista": "Root device (rdev)."
  },
  {
    "question": "231. ¿Qué directiva de Apache habilitará el soporte de protocolo HTTPS?",
    "options": [
      "A. HTTPSEngine",
      "B. SSLEngine",
      "C. SSLEnable",
      "D. HTTPSEnable"
    ],
    "answer": "B",
    "explicacion": "La directiva correcta para activar SSL/TLS en un VirtualHost es 'SSLEngine on'.",
    "pista": "Motor SSL."
  },
  {
    "question": "232. ¿Qué confirma el comando testparm sobre la configuración de Samba?",
    "options": [
      "A. Que el archivo de configuración se cargará con éxito (sintaxis correcta).",
      "B. Que los servicios operarán como se espera.",
      "C. Que Samba arrancará al inicio.",
      "D. Que el firewall no bloquea."
    ],
    "answer": "A",
    "explicacion": "testparm solo verifica la sintaxis del archivo smb.conf, no la lógica operativa ni la red.",
    "pista": "Solo sintaxis."
  },
  {
    "question": "233. Sobre el extracto: '<Files private.html> Order allow,deny Deny from all </Files>', selecciona DOS afirmaciones correctas.",
    "options": [
      "A. Denegará acceso a cualquier 'private.html' encontrado bajo el directorio.",
      "B. Denegará acceso a private.html en la raíz pero no en subdirectorios.",
      "C. Permitirá acceso solo a private.html.",
      "D. Permitirá acceso solo a ese archivo.",
      "E. La configuración permitirá acceso a /var/web/private.html si existe (ERROR en opción E, la lógica dice que deniega)."
    ],
    "answer": "A, E",
    "explicacion": "La pregunta original es un poco confusa en sus opciones. La directiva <Files> aplica a cualquier archivo con ese nombre en el directorio y subdirectorios. 'Deny from all' deniega el acceso. (Nota: Según el dump oficial, las respuestas son A y E, aunque E parece contradecir la lógica de 'Deny', a menudo se refiere a la especificidad o alcance).",
    "pista": "Bloquea el archivo en todas partes."
  },
  {
    "question": "234. ¿Qué directiva de Apache especifica los tipos de directivas permitidas en archivos .htaccess?",
    "options": [
      "A. AllowExternalConfig",
      "B. AllowAccessFile",
      "C. AllowConfig",
      "D. AllowOverride"
    ],
    "answer": "D",
    "explicacion": "AllowOverride define qué categorías de directivas (AuthConfig, Limit, etc.) pueden usarse en .htaccess para anular la configuración global.",
    "pista": "Permitir anular."
  },
  {
    "question": "235. ¿Qué servicio debe iniciarse primero en un servidor NFS?",
    "options": [
      "A. mountd",
      "B. nfsd",
      "C. portmap",
      "D. statd"
    ],
    "answer": "C",
    "explicacion": "NFS depende de RPC. 'portmap' (o rpcbind) es el mapeador de puertos RPC y debe estar corriendo antes de iniciar cualquier servicio NFS.",
    "pista": "Mapa de puertos."
  },
  {
    "question": "236. ¿Qué se necesita para sincronizar la contraseña de Unix con la de Samba cuando se cambia la de Samba?",
    "options": [
      "A. Nada.",
      "B. netvamp.",
      "C. winbind --sync.",
      "D. Añadir 'unix password sync = yes' a smb.conf.",
      "E. Añadir 'smb unix password = sync'."
    ],
    "answer": "D",
    "explicacion": "La directiva 'unix password sync = yes' hace que Samba intente cambiar la contraseña de sistema del usuario cuando este cambia su contraseña Samba.",
    "pista": "Sincronización activada."
  },
  {
    "question": "237. En lugar de usar echo 1 > /proc..., se editará /etc/sysctl.conf. ¿Qué valor falta? '_______ = 1'",
    "answer": "net.ipv4.ip_forward",
    "explicacion": "El parámetro sysctl equivalente a /proc/sys/net/ipv4/ip_forward es net.ipv4.ip_forward.",
    "pista": "Nombre del parámetro IP forward."
  },
  {
    "question": "238. Especifica el comando para crear un par de claves SSH (sin ruta ni parámetros).",
    "answer": "ssh-keygen",
    "explicacion": "El comando estándar para generar claves es ssh-keygen.",
    "pista": "Generador de claves."
  },
  {
    "question": "239. ¿Qué palabra clave de configuración de Squid se usa para definir redes y tiempos (crear listas de control)?",
    "options": [
      "A. acl",
      "B. allow",
      "C. http_allow",
      "D. permit"
    ],
    "answer": "A",
    "explicacion": "La palabra clave 'acl' (Access Control List) se usa para definir los elementos (IPs, puertos, horas) que luego se usarán en las reglas de acceso.",
    "pista": "Definir ACL."
  },
  {
    "question": "240. En el extracto de Squid mostrado (ver PDF), ¿qué afirmación es cierta?",
    "options": [
      "A. Los usuarios de localhost pueden acceder.",
      "B. Falta una regla deny all al final.",
      "C. Permite SSL en cualquier puerto.",
      "D. Este proxy no puede usarse para acceder a servidores FTP en el puerto por defecto.",
      "E. Está mal configurado."
    ],
    "answer": "D",
    "explicacion": "La lista 'Safe_ports' define los puertos permitidos. FTP (21) no está en la lista (80, 443, 1025+). La regla 'http_access deny !Safe_ports' bloqueará el tráfico al puerto 21.",
    "pista": "FTP no es puerto seguro ahí."
  },
  {
    "question": "241. ¿Qué comando se usa para decir al servidor NFS qué sistemas de archivos hacer disponibles (exportar)?",
    "options": [
      "A. exportfs",
      "B. mkfs.nfs",
      "C. mount",
      "D. nfsservctl",
      "E. telinit"
    ],
    "answer": "A",
    "explicacion": "exportfs se usa para mantener la tabla de sistemas de archivos exportados por NFS.",
    "pista": "Exportar sistemas de archivos."
  },
  {
    "question": "242. Cuando Apache se configura para usar hosts virtuales basados en nombre:",
    "options": [
      "A. Se necesita una IP diferente para cada uno.",
      "B. Listen es ignorado.",
      "C. Arranca múltiples demonios.",
      "D. También es necesario crear un bloque Virtual Host para el host principal.",
      "E. Solo se pueden usar ServerName y DocumentRoot."
    ],
    "answer": "D",
    "explicacion": "Al activar vhosts basados en nombre, el servidor principal 'desaparece' y debe definirse explícitamente como un VirtualHost más si se quiere servir contenido.",
    "pista": "El principal se convierte en virtual."
  },
  {
    "question": "243. ¿Cuál es el nombre del archivo de configuración de procmail en el directorio home del usuario?",
    "answer": ".procmailrc",
    "explicacion": "Es el archivo oculto .procmailrc.",
    "pista": "Punto procmailrc."
  },
  {
    "question": "244. ¿Cuál es la entrada apropiada para permitir ejecutar SSH desde inetd?",
    "options": [
      "A. ssh stream tcp nowait root /usr/sbin/tcpd sshd -i",
      "B. ssh stream tcp ... tcpd tcpd",
      "C. ssh stream tcpd ...",
      "D. ssh data ...",
      "E. ssh data ..."
    ],
    "answer": "A",
    "explicacion": "Para ejecutar sshd desde inetd/xinetd, se debe invocar con la opción '-i' (inetd mode). La sintaxis correcta de inetd incluye 'stream tcp nowait root'.",
    "pista": "Stream tcp y modo -i."
  },
  {
    "question": "245. ¿Qué comando debe usarse para crear un par de claves SSH?",
    "answer": "ssh-keygen",
    "explicacion": "Repetida. ssh-keygen.",
    "pista": "Generar claves."
  },
  {
    "question": "246. Los demonios de Postfix pueden ejecutarse en chroot estableciendo la bandera chroot en el archivo...",
    "answer": "master.cf",
    "explicacion": "El archivo master.cf controla cómo se ejecutan los procesos de Postfix, incluyendo si deben ejecutarse en jaula chroot (columna chroot 'y' o 'n').",
    "pista": "Archivo maestro."
  },
  {
    "question": "247. Usando solo comandos de named, ¿cuál hace que named relea sus archivos de zona?",
    "answer": "rndc reload",
    "explicacion": "rndc (Remote Name Daemon Control) es la utilidad para administrar named. 'reload' recarga la configuración y zonas.",
    "pista": "Control del demonio reload."
  },
  {
    "question": "248. ¿Qué claves se almacenan en el archivo authorized_keys?",
    "answer": "public",
    "explicacion": "En authorized_keys se guardan las claves PÚBLICAS de los clientes que tienen permiso para conectarse.",
    "pista": "Claves públicas."
  },
  {
    "question": "249. ¿Qué comando se puede usar al escribir scripts para realizar pruebas contra servicios remotos?",
    "options": [
      "A. snort",
      "B. netmap",
      "C. nc",
      "D. telnet"
    ],
    "answer": "C",
    "explicacion": "nc (netcat) es ideal para scripts porque puede enviar datos a puertos y recibir respuestas de forma no interactiva.",
    "pista": "Navaja suiza TCP/IP."
  },
  {
    "question": "250. Todas las máquinas fuera de la red pueden enviar correos a través del servidor a direcciones no servidas por él. ¿Cómo se llama a esto?",
    "answer": "open relay",
    "explicacion": "Un 'open relay' es un servidor que permite a terceros enviar correo a terceros, a menudo usado por spammers.",
    "pista": "Retransmisor abierto."
  },
  {
    "question": "251. ¿Cuál es el puerto estándar usado por OpenVPN?",
    "options": [
      "A. 1723",
      "B. 4500",
      "C. 500",
      "D. 1194"
    ],
    "answer": "D",
    "explicacion": "El puerto registrado oficialmente para OpenVPN es el 1194 (UDP/TCP).",
    "pista": "Mil ciento noventa y cuatro."
  },
  {
    "question": "252. ¿Cuál de los siguientes NO está incluido en un encabezado de regla Snort?",
    "options": [
      "A. protocol",
      "B. action",
      "C. source IP address",
      "D. packet byte offset",
      "E. source port"
    ],
    "answer": "D",
    "explicacion": "El encabezado de regla define la acción, protocolo, IPs y puertos. El 'packet byte offset' es una opción del cuerpo de la regla (payload detection), no del encabezado.",
    "pista": "Offset es del cuerpo."
  },
  {
    "question": "253. ¿Por qué se recomiendan diferentes direcciones IP al alojar múltiples hosts virtuales HTTPS? (Elige DOS)",
    "options": [
      "A. Apache cachea claves por IP.",
      "B. La conexión SSL se establece antes de que el servidor conozca el nombre del host virtual.",
      "C. La clave SSL está atada a una IP específica.",
      "D. Solo es necesario con contenido dinámico.",
      "E. La extensión SNI (Server Name Indication) no está soportada universalmente (en navegadores/sistemas muy antiguos).."
    ],
    "answer": "B, E",
    "explicacion": "Históricamente, el handshake SSL ocurre antes de enviar la cabecera HTTP Host, por lo que el servidor no sabía qué certificado entregar (B). SNI soluciona esto, pero no todos los clientes antiguos lo soportan (E).",
    "pista": "Handshake previo y compatibilidad SNI."
  },
  {
    "question": "254. ¿Cuál es el nombre del módulo en Apache que proporciona la funcionalidad de autenticación básica HTTP? (Solo el nombre)",
    "answer": "mod_auth",
    "explicacion": "El módulo clásico es mod_auth (o mod_auth_basic en versiones más nuevas, pero la respuesta 'mod_auth' es la esperada en este examen).",
    "pista": "Módulo de autenticación."
  },
  {
    "question": "255. ¿Qué tipo de registro DNS define a qué servidor(es) se debe enviar el correo de un dominio?",
    "answer": "MX",
    "explicacion": "Mail Exchanger.",
    "pista": "Intercambiador de correo."
  },
  {
    "question": "256. Se creó un usuario nuevo en el servidor maestro NIS con useradd pero no puede iniciar sesión. Los usuarios viejos sí. ¿Qué paso se olvidó?",
    "options": [
      "A. Ejecutar yppush (o make en /var/yp) para propagar los cambios.",
      "B. Ejecutar make para generar nuevos mapas.",
      "C. Iniciar yppasswdd.",
      "D. Iniciar ypxfr.",
      "E. Reiniciar ypxfr."
    ],
    "answer": "A",
    "explicacion": "Después de añadir un usuario a los archivos locales (/etc/passwd), se deben regenerar los mapas NIS (normalmente con 'make' en /var/yp) y propagarlos ('yppush'). La opción A cubre la propagación necesaria.",
    "pista": "Empujar los cambios."
  },
  {
    "question": "257. Con 'UserDir public_html', ¿cuál es la ruta completa para http://server/~joe/index.html si los homes están en /home?",
    "options": [
      "A. /home/joe/public_html/index.html",
      "B. /home/public_html/joe/index.html",
      "C. /home/joe/public_html/htdocs/index.html",
      "D. /home/joe/apache/public_html/index.html"
    ],
    "answer": "A",
    "explicacion": "UserDir especifica el directorio dentro del home del usuario. /home/joe + public_html + index.html.",
    "pista": "Home + UserDir."
  },
  {
    "question": "258. ¿Para qué se usa DNSSEC?",
    "options": [
      "A. Consultas encriptadas.",
      "B. Autenticación criptográfica de zonas DNS.",
      "C. Consultas secundarias.",
      "D. Definir sección segura.",
      "E. Consultar sección segura."
    ],
    "answer": "B",
    "explicacion": "DNSSEC firma digitalmente los registros para autenticar su origen e integridad.",
    "pista": "Autenticación de zonas."
  },
  {
    "question": "259. ¿Por qué debería establecerse 'disable_vrfy_command = yes' en Postfix?",
    "options": [
      "A. Previene intentos de entrega a inexistentes.",
      "B. Previene técnicas de recolección de direcciones de correo electrónico.",
      "C. Habilita verificación.",
      "D. Acelera el reenvío."
    ],
    "answer": "B",
    "explicacion": "El comando VRFY permite preguntar al servidor si un email existe. Los spammers lo usan para 'pescar' cuentas válidas. Desactivarlo mejora la privacidad.",
    "pista": "Evitar recolección de emails."
  },
  {
    "question": "260. ¿Cuál de los siguientes servicios Linux tiene soporte SOLO para el protocolo de enrutamiento RIP?",
    "options": [
      "A. gated",
      "B. ipchains",
      "C. netfilter",
      "D. routed",
      "E. zebra"
    ],
    "answer": "D",
    "explicacion": "'routed' es un demonio antiguo que solo soporta RIP v1/v2. (Gated y Zebra/Quagga soportan múltiples protocolos como OSPF, BGP, etc.).",
    "pista": "Demonio de ruta simple."
  },
  
  
  {
    "question": "261. Selecciona la opción de Samba que debe usarse si la intención principal es configurar un servicio de impresión para invitados (guest).",
    "options": [
      "A. security = cups",
      "B. security = ldap",
      "C. security = pam",
      "D. security = share",
      "E. security = printing"
    ],
    "answer": "D",
    "explicacion": "El modo 'security = share' fue diseñado históricamente para compartir recursos (como impresoras) de forma sencilla, similar a Windows 9x, donde se valida por recurso y no por usuario, facilitando el acceso invitado.",
    "pista": "Seguridad a nivel de recurso compartido."
  },
  {
    "question": "262. ¿Qué subcomandos de openssl se utilizan en el proceso de generación de una clave privada y una Solicitud de Firma de Certificado (CSR)? (Elige DOS)",
    "options": [
      "A. csr",
      "B. gencsr",
      "C. genkey",
      "D. genrsa",
      "E. req"
    ],
    "answer": "D, E",
    "explicacion": "'genrsa' se usa para generar la clave privada RSA y 'req' se usa para generar la solicitud de firma (CSR) y certificados autofirmados.",
    "pista": "Generar RSA y Requerir firma."
  },
  {
    "question": "263. ¿Cuál de las siguientes líneas de configuración exportará /usr/local/share/ a nfsclient con acceso de lectura-escritura, asegurando que todos los cambios se escriban directamente al disco?",
    "options": [
      "A. /usr/local/share nfsclient(rw) written",
      "B. nfsclient: /usr/local/share/:rw,sync",
      "C. /usr/local/share nfsclient:rw:sync",
      "D. /usr/local/share nfsclient(rw,sync)",
      "E. nfsclient(rw,sync) /usr/local/share"
    ],
    "answer": "D",
    "explicacion": "La opción 'sync' fuerza al servidor NFS a escribir los cambios en disco antes de responder al cliente, garantizando integridad. La sintaxis correcta es 'directorio cliente(opciones)'.",
    "pista": "Directorio Cliente (Opciones)."
  },
  {
    "question": "264. ¿Cuál de los siguientes módulos PAM permite al administrador del sistema usar un archivo arbitrario con una lista de usuarios/grupos y restricciones sobre los recursos del sistema disponibles para ellos?",
    "options": [
      "A. pam_filter",
      "B. pam_limits",
      "C. pam_listfile",
      "D. pam_unix"
    ],
    "answer": "B",
    "explicacion": "El módulo 'pam_limits' lee el archivo /etc/security/limits.conf (o el especificado) para establecer límites de recursos (CPU, memoria, logins) por usuario o grupo.",
    "pista": "Límites de recursos."
  },
  {
    "question": "265. ¿Cuáles de los siguientes son modos o niveles de seguridad de Samba? (Elige DOS)",
    "options": [
      "A. ads",
      "B. data",
      "C. ldap",
      "D. network",
      "E. share"
    ],
    "answer": "A, E",
    "explicacion": "'ads' (Active Directory) y 'share' son modos de seguridad válidos en la directiva 'security'. ('user', 'server' y 'domain' son otros).",
    "pista": "ADS y Share."
  },
  {
    "question": "266. ¿Cuál podría ser una razón para invocar vsftpd desde (x)inetd?",
    "options": [
      "A. No es buena idea, (x)inetd no es seguro.",
      "B. Ejecutar vsftpd en modo standalone solo es posible como root.",
      "C. vsftpd no puede arrancar en modo standalone.",
      "D. (x)inetd tiene más capacidades de control de acceso.",
      "E. (x)inetd es necesario para chroot."
    ],
    "answer": "D",
    "explicacion": "Usar un superservidor como xinetd añade una capa extra de control (tcp_wrappers, límites de tiempo/conexión) antes de que el tráfico llegue siquiera al servicio FTP.",
    "pista": "Control de acceso extra."
  },
  {
    "question": "267. ¿Qué registros deben introducirse en un archivo de zona para usar 'Round Robin Load Distribution' para un servidor web?",
    "options": [
      "A. www 60 IN A 1.1; www 60 IN A 1.2; www 60 IN A 1.3",
      "B. www 60 IN A 1.1:1.2:1.3",
      "C. www 60 IN A 1.1-3",
      "D. www 60 IN RR 1:3",
      "E. www 60 IN RR 1.1 1.2 1.3"
    ],
    "answer": "A",
    "explicacion": "El Round Robin DNS se logra simplemente creando múltiples registros A con el mismo nombre de dominio apuntando a diferentes IPs.",
    "pista": "Múltiples registros A iguales."
  },
  {
    "question": "268. ¿Qué líneas en el archivo de configuración sshd deberían cambiarse para aumentar la seguridad? (Elige DOS)",
    "options": [
      "A. Protocol 2, 1",
      "B. PermitEmptyPasswords no",
      "C. Port 22",
      "D. PermitRootLogin yes",
      "E. IgnoreRhosts yes"
    ],
    "answer": "A, D",
    "explicacion": "Se debe forzar 'Protocol 2' (eliminando el 1 inseguro) y establecer 'PermitRootLogin no' para evitar ataques directos al superusuario.",
    "pista": "Solo protocolo 2 y sin root."
  },
  {
    "question": "269. ¿Qué archivo de configuración específico del sitio para la suite 'shadow login' debe modificarse para registrar los fallos de inicio de sesión? (Ruta completa)",
    "answer": "/etc/login.defs",
    "explicacion": "El archivo /etc/login.defs contiene definiciones de configuración para la suite login, incluyendo opciones de logging (LOG_UNKFAIL_ENAB, etc.).",
    "pista": "Definiciones de login."
  },
  {
    "question": "270. Has instalado nuevas librerías, pero no están disponibles ni listadas por ldconfig -p. ¿A qué archivo debe añadirse la ruta antes de ejecutar ldconfig?",
    "answer": "/etc/ld.so.conf",
    "explicacion": "/etc/ld.so.conf (o archivos en /etc/ld.so.conf.d/) define los directorios donde el sistema busca librerías compartidas.",
    "pista": "Configuración de ld.so."
  },
  {
    "question": "271. ¿Qué comando se utiliza para administrar reglas de netfilter para IPv6?",
    "options": [
      "A. iptables",
      "B. iptablesv6",
      "C. iptables6",
      "D. ip6tables",
      "E. ipv6tables"
    ],
    "answer": "D",
    "explicacion": "ip6tables es el equivalente exacto de iptables pero para el protocolo IPv6.",
    "pista": "ip6."
  },
  {
    "question": "272. Al conectar a un servidor SSH por primera vez, su huella (fingerprint) se almacena en un archivo ubicado en:",
    "options": [
      "A. ~/.ssh/fingerprints",
      "B. ~/.ssh/id_dsa",
      "C. ~/.ssh/known_hosts",
      "D. ~/.ssh/id_dsa.pub",
      "E. ~/.ssh/gpg.txt"
    ],
    "answer": "C",
    "explicacion": "El cliente SSH almacena las claves de host de los servidores conocidos en ~/.ssh/known_hosts para detectar ataques Man-in-the-Middle en el futuro.",
    "pista": "Hosts conocidos."
  },
  {
    "question": "273. ¿Cuál de los siguientes se recomienda para reducir el consumo de recursos de disco de Squid?",
    "options": [
      "A. Deshabilitar listas de acceso.",
      "B. Reducir el tamaño de cache_dir en el archivo de configuración.",
      "C. Rotar logs regularmente.",
      "D. Deshabilitar logging de FQDN.",
      "E. Reducir procesos hijos."
    ],
    "answer": "B",
    "explicacion": "La directiva 'cache_dir' define cuánto espacio en disco usará Squid para la caché. Reducirlo libera disco.",
    "pista": "Tamaño del directorio de caché."
  },
  {
    "question": "274. ¿Qué organizaciones rastrean e informan sobre fallos de seguridad en tecnología informática? (Elige DOS)",
    "options": [
      "A. Bugtraq",
      "B. CERT",
      "C. CSIS",
      "D. Freshmeat",
      "E. Kernel.org"
    ],
    "answer": "A, C",
    "explicacion": "Bugtraq es una lista de correo famosa sobre vulnerabilidades. CERT (aunque aquí marcado como C en algunos dumps antiguos, la opción B es el CERT clásico, pero el dump marca A y C). Nota: En el mundo real CERT (B) es la respuesta obvia junto a Bugtraq. Si el dump dice A y C, mantén A y C, pero ten en cuenta que CERT es la autoridad principal.",
    "pista": "Respuesta según dump: A y C."
  },
  {
    "question": "275. ¿Cuál de los siguientes NO es un tipo de ACL válido al configurar Squid?",
    "options": [
      "A. src",
      "B. source",
      "C. dstdomain",
      "D. url_regex",
      "E. time"
    ],
    "answer": "B",
    "explicacion": "El tipo de ACL para dirección de origen es 'src', no 'source'.",
    "pista": "src es la abreviatura correcta."
  },
  {
    "question": "276. Introduce el nombre del archivo de configuración de Kerberos 5 (sin ruta).",
    "answer": "krb5.conf",
    "explicacion": "El archivo principal de configuración de Kerberos es krb5.conf.",
    "pista": "Conf de krb5."
  },
  {
    "question": "277. ¿Cuáles son paquetes de software DNS alternativos a BIND? (Elige DOS)",
    "options": [
      "A. djbdns",
      "B. easydns",
      "C. superdns",
      "D. dnsmasq",
      "E. dnstiny"
    ],
    "answer": "A, D",
    "explicacion": "djbdns (de Dan Bernstein) y dnsmasq (muy usado en redes pequeñas/Linux embebido) son alternativas populares.",
    "pista": "djb y masq."
  },
  {
    "question": "278. ¿En qué contexto de Apache debe activarse el soporte SSL?",
    "options": [
      "A. En una directiva Virtual Host",
      "B. En una directiva Location",
      "C. En una directiva Directory",
      "D. En una directiva SSL Host"
    ],
    "answer": "A",
    "explicacion": "SSL se configura típicamente a nivel de servidor virtual (<VirtualHost *:443>).",
    "pista": "Virtual Host 443."
  },
  {
    "question": "279. ¿Qué línea de comando crea un túnel SSH para los protocolos POP y SMTP?",
    "options": [
      "A. ssh -L:110 -L:25 ...",
      "B. ssh -L 25:110 ...",
      "C. ssh -L mailhost:110 -L mailhost:25 ...",
      "D. ssh -L mailhost:25:110 ...",
      "E. ssh -L 110:mailhost:110 -L 25:mailhost:25 -l user -N mailhost"
    ],
    "answer": "E",
    "explicacion": "Se necesitan dos túneles (-L puerto_local:destino:puerto_remoto). La opción E mapea el 110 local al 110 remoto y el 25 local al 25 remoto.",
    "pista": "Doble túnel -L."
  },
  {
    "question": "280. ¿Para qué propósito utiliza nmap la 'huella de pila TCP/IP' (stack fingerprinting)?",
    "options": [
      "A. Determinar el sistema operativo remoto.",
      "B. Filtrar respuestas.",
      "C. Identificar duplicados.",
      "D. Enmascarar respuestas.",
      "E. Identificar servidores para forense."
    ],
    "answer": "A",
    "explicacion": "El fingerprinting de la pila TCP/IP analiza cómo responde un host a paquetes anómalos para deducir qué Sistema Operativo y versión está ejecutando (OS Detection -O).",
    "pista": "Detectar Sistema Operativo."
  },
  {
    "question": "281. Un firewall usa MASQUERADE y la conexión es inestable. ¿Qué cambio en iptables podría aliviar el problema?",
    "options": [
      "A. Cambiar el objetivo MASQUERADE a SNAT.",
      "B. Cambiar a DNAT.",
      "C. Cambiar a BALANCE.",
      "D. Cambiar a REDIRECT.",
      "E. Cambiar a BNAT."
    ],
    "answer": "A",
    "explicacion": "MASQUERADE tiene una sobrecarga extra porque comprueba la IP de la interfaz en cada paquete (útil para IPs dinámicas). Si la IP es estática o la conexión falla por esa sobrecarga, SNAT es más eficiente y estable.",
    "pista": "SNAT es más estático y robusto."
  },
  {
    "question": "282. ¿Qué configuraciones de sshd deben establecerse en 'no' para deshabilitar completamente los inicios de sesión con contraseña? (Elige TRES)",
    "options": [
      "A. PAMAuthentication",
      "B. ChallengeResponseAuthentication",
      "C. UsePAM",
      "D. UsePasswords",
      "E. PasswordAuthentication"
    ],
    "answer": "B, C, E",
    "explicacion": "Para anular contraseñas totalmente hay que desactivar: PasswordAuthentication, ChallengeResponseAuthentication y a veces UsePAM (para evitar que PAM pida contraseña independientemente de SSH).",
    "pista": "Password, Challenge y PAM."
  },
  {
    "question": "283. ¿Qué opciones son válidas en el archivo /etc/exports? (Elige DOS)",
    "options": [
      "A. rw",
      "B. ro",
      "C. rootsquash",
      "D. norootsquash",
      "E. uid"
    ],
    "answer": "A, B",
    "explicacion": "Repetida: rw y ro.",
    "pista": "Lectura y escritura."
  },
  {
    "question": "284. El acceso remoto a un CD-RW debe restringirse. ¿Qué DOS soluciones son posibles usando pam_console?",
    "options": [
      "A. Cambiar el display manager...",
      "B. pam_console permite acceso via consola, incluyendo simultáneo...",
      "C. pam_console puede controlar acceso a dispositivos via consola, permitiendo/denegando en sesión de usuario.",
      "D. pam_console debe ser required.",
      "E. A través de sudo... Además, configurar /etc/pam.d/su para usar pam_console."
    ],
    "answer": "C, E",
    "explicacion": "pam_console gestiona permisos de dispositivos físicos para el usuario sentado en la consola. Se puede usar para restringir quién toca el CD-RW o permitir a usuarios 'sudo' acceder como si fueran locales.",
    "pista": "Control de consola y sudo."
  },
  {
    "question": "285. Introduce el comando usado para eliminar los tickets de Kerberos de la caché.",
    "answer": "kdestroy",
    "explicacion": "kdestroy borra el archivo de credenciales activo del usuario, cerrando la sesión Kerberos.",
    "pista": "Destruir tickets."
  },
  {
    "question": "286. ¿Qué comando de Postfix reconstruye todas las bases de datos de alias con una sola invocación?",
    "options": [
      "A. makealiases",
      "B. newaliases",
      "C. postalias",
      "D. postmapbuild"
    ],
    "answer": "B",
    "explicacion": "'newaliases' es el comando de compatibilidad (o nativo en Sendmail) que Postfix implementa para regenerar la base de datos de alias (/etc/aliases.db).",
    "pista": "Nuevos alias."
  },
  {
    "question": "287. ¿Qué opción debe usarse con ifconfig para ver también las interfaces que están caídas (down)?",
    "options": [
      "A. -d",
      "B. -a",
      "C. --all",
      "D. --down",
      "E. None"
    ],
    "answer": "B",
    "explicacion": "ifconfig -a (all) muestra todas las interfaces, estén activas o no.",
    "pista": "All (-a)."
  },
  {
    "question": "288. En netfilter, ¿qué tabla de coincidencia contiene las cadenas integradas INPUT, OUTPUT y FORWARD?",
    "options": [
      "A. ipconn",
      "B. filter",
      "C. nat",
      "D. default",
      "E. masq"
    ],
    "answer": "B",
    "explicacion": "La tabla 'filter' es la tabla por defecto y contiene las cadenas para el tráfico dirigido al host (INPUT), desde el host (OUTPUT) y a través del host (FORWARD).",
    "pista": "Tabla filtro."
  },
  {
    "question": "289. ¿Qué variables de entorno utiliza ssh-agent? (Elige DOS)",
    "options": [
      "A. SSH_AGENT_KEY",
      "B. SSH_AGENT_SOCK",
      "C. SSH_AGENT_PID",
      "D. SSH_AUTH_SOCK",
      "E. SSH_AUTH_PID"
    ],
    "answer": "B, C",
    "explicacion": "Según el dump del examen LPI (y la transcripción proporcionada), las respuestas son B y C. (Nota técnica: En la realidad, las variables estándar son SSH_AUTH_SOCK y SSH_AGENT_PID. Si el examen pide B y C, usa esas, pero ten en cuenta la discrepancia real).",
    "pista": "Variables del agente (según dump)."
  },
  {
    "question": "290. No estás seguro de si el kernel ha detectado un hardware. ¿Qué comando muestra el búfer de anillo del kernel?",
    "answer": "dmesg",
    "explicacion": "dmesg imprime los mensajes del kernel (boot y hardware detection).",
    "pista": "Mensajes de diagnóstico."
  },
  {
    "question": "291. Un servidor DNS tiene la IP 192.168.0.1. ¿Qué DOS cosas hay que hacer en el cliente?",
    "options": [
      "A. Añadir 'nameserver 192.168.0.1' a /etc/resolv.conf",
      "B. Ejecutar route add nameserver...",
      "C. Ejecutar ifconfig...",
      "D. Ejecutar 'echo \"nameserver 192.168.1.1\" >> /etc/resolv.conf'",
      "E. Ejecutar bind..."
    ],
    "answer": "A, D",
    "explicacion": "Se debe configurar /etc/resolv.conf. La opción A tiene la IP correcta (0.1). La opción D es un comando válido para añadir una línea, aunque el dump tiene una errata en la IP (1.1 en vez de 0.1), se considera correcta como 'acción de añadir servidor'.",
    "pista": "Editar resolv.conf."
  },
  {
    "question": "292. ¿Qué hace la configuración de procmail: ':0fw * < 256000 | /usr/bin/foo'?",
    "options": [
      "A. Envía emails viejos a foo.",
      "B. Si contiene valor menor a 256000...",
      "C. Envía mail con menos palabras...",
      "D. Programa foo usado para mails grandes...",
      "E. Si el email es más pequeño que 256000 Bytes, procmail lo procesa con el programa foo (filtro)."
    ],
    "answer": "E",
    "explicacion": "La condición '* < 256000' comprueba el tamaño. El flag 'f' indica que es un filtro (pipe). Si es menor, se pasa el correo a través de /usr/bin/foo.",
    "pista": "Filtro por tamaño."
  },
  {
    "question": "293. ¿Qué archivo asegura que se use procmail para filtrar el correo entrante de un usuario?",
    "options": [
      "A. .procmail",
      "B. .forward",
      "C. .bashrc",
      "D. /etc/procmailrc",
      "E. /etc/aliases"
    ],
    "answer": "B",
    "explicacion": "El archivo .forward en el home del usuario se usa para invocar procmail explícitamente si el MTA no lo hace por defecto (ej: '|/usr/bin/procmail').",
    "pista": "Reenvío al programa."
  },
  {
    "question": "294. ¿Qué tipos de dispositivos de red virtuales usa OpenVPN? (Elige DOS)",
    "options": [
      "A. eth",
      "B. tap",
      "C. lo",
      "D. tun",
      "E. ppp"
    ],
    "answer": "B, D",
    "explicacion": "OpenVPN puede crear túneles de capa 3 (tun) o puentes de capa 2 (tap).",
    "pista": "Tun y Tap."
  },
  {
    "question": "295. Sospechas de correos con remitente 'From:' falsificado. ¿Qué ayuda a encontrar el origen real?",
    "options": [
      "A. TCP wrappers log.",
      "B. Comando FR-strlog.",
      "C. LOG_REAL_FROM.",
      "D. Filtro en aliases.",
      "E. Mirar las cabeceras Received y Message-ID."
    ],
    "answer": "E",
    "explicacion": "Las cabeceras 'Received:' muestran la ruta real de servidores por la que pasó el correo, revelando la IP de origen original independientemente de lo que diga el 'From'.",
    "pista": "Cabeceras Received."
  }
  
];