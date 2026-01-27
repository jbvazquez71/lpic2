const preguntasLPIC2_1_201_2025 = [
    {
    "question": "1. ¿Cuándo es importante el historial de datos de uso de recursos? (Selecciona TRES respuestas correctas).",
    "options": [
      "A. Para predecir cuándo será necesario aumentar los recursos.",
      "B. Para seleccionar un proveedor de computadoras.",
      "C. Para identificar procesos eliminados durante incidentes de falta de memoria (OOM).",
      "D. Para diagnosticar problemas de capacidad.",
      "E. Para solucionar un problema de software (troubleshooting)."
    ],
    "answer": "A, D, E",
    "explicacion": "Los datos históricos permiten realizar un análisis de tendencias para el crecimiento futuro (capacidad) y sirven como línea base para identificar comportamientos anormales durante la resolución de fallos de software.",
    "pista": "Piensa en qué situaciones necesitas comparar el rendimiento actual con el comportamiento pasado del sistema."
    },
    {
    "question": "2. En la siguiente salida del comando 'vmstat 1 100', ¿qué porcentaje de tiempo estuvo la CPU esperando por E/S (I/O) pendiente? (mira el docx)",
    "options": [
      "A. 0",
      "B. 100",
      "C. 35.9",
      "D. 57.7"
    ],
    "answer": "A",
    "explicacion": "La columna 'wa' (wait) en la sección de CPU del comando vmstat muestra el tiempo que el procesador espera a que se completen las operaciones de disco. En la captura, ese valor es 0 en todas las muestras.",
    "pista": "Localiza la columna 'wa' bajo el encabezado 'cpu'."
    },
    {
    "question": "3. ¿Cuál de los siguientes es un efecto secundario del uso extensivo del espacio de intercambio (swap)?",
    "options": [
      "A. El sistema de archivos raíz puede llenarse porque el espacio de intercambio siempre se encuentra en la partición raíz del sistema.",
      "B. El rendimiento general del sistema puede degradarse debido al uso intenso del disco duro y a la reorganización de la memoria.",
      "C. Dado que los procesos siempre existen completamente en la RAM o en el swap, la RAM normal puede quedar sin uso si el kernel no devuelve los procesos del espacio de intercambio a la memoria.",
      "D. La memoria puede fragmentarse y ralentizar el acceso a las páginas de memoria. Sin embargo, esto puede mantenerse al mínimo mediante el uso regular de memfrag -d.",
      "E. Las aplicaciones deben reiniciarse porque sus direcciones de memoria virtual cambian para reflejar la reubicación de la memoria al área de direcciones de intercambio."
    ],
    "answer": "B",
    "explicacion": "El uso excesivo de swap implica que el sistema debe mover datos constantemente entre la RAM y el disco duro. Como el disco es mucho más lento, el rendimiento del sistema cae drásticamente.",
    "pista": "Compara la velocidad de la memoria RAM frente a la velocidad de un disco duro o SSD."
    },
    {
    "question": "4. ¿Qué procesos contribuyen al porcentaje de tiempo que la CPU pasó en el estado 'wa', según la siguiente salida de 'top'?",
    "options": [
      "A. Procesos esperando la interacción del usuario.",
      "B. Procesos que ya fueron cerrados y están esperando ser lanzados de nuevo.",
      "C. Procesos que aún no han sido programados porque no se han cargado completamente en la RAM o están en el swap.",
      "D. Procesos esperando a que se completen las operaciones de E/S (IO)."
    ],
    "answer": "D",
    "explicacion": "El indicador 'wa' (I/O Wait) mide el tiempo que la CPU permanece inactiva mientras hay procesos pendientes de completar operaciones de entrada o salida en el disco.",
    "pista": "Recuerda que 'wa' es la abreviatura de 'Wait' (Espera), específicamente para operaciones de disco."
    },
    {
    "question": "5. ¿Cuáles de las siguientes herramientas ayudan en la planificación de capacidad al listar e identificar procesos de Linux de interés? (Elige DOS respuestas correctas).",
    "options": [
      "A. acpid",
      "B. lsof",
      "C. pstree",
      "D. telinit",
      "E. lsproc"
    ],
    "answer": "B, C",
    "explicacion": "lsof identifica archivos abiertos por procesos y pstree muestra la jerarquía de procesos en ejecución, ambas útiles para entender el consumo de recursos.",
    "pista": "Busca herramientas que sirvan para listar archivos abiertos o visualizar la estructura de los procesos activos."
    },
    {
    "question": "6. Para monitorear las operaciones de un clúster de aplicaciones web, se ha creado una página web especial en todos los servidores que muestra 'OK' o 'FAILURE'. ¿Cuáles de las siguientes herramientas pueden consultar regularmente estas páginas y generar alertas? (Elige DOS respuestas correctas).",
    "options": [
      "A. MRTG",
      "B. Cacti",
      "C. Nagios",
      "D. Icinga 2",
      "E. collectd"
    ],
    "answer": "C, D",
    "explicacion": "Nagios e Icinga 2 son sistemas de monitoreo activos que pueden ejecutar scripts o checks para verificar el estado de servicios web y alertar en caso de fallo.",
    "pista": "Piensa en herramientas de monitoreo centradas en disponibilidad y alertas en lugar de solo gráficas."
    },
    {
    "question": "7. En la siguiente salida del comando 'uptime', ¿cuál es el promedio de carga de los últimos 5 minutos para el sistema?",
    "options": [
      "A. 0.47",
      "B. 24.71",
      "C. 35.31",
      "D. No hay intervalo de 5 minutos. Es algún valor entre 0.47 y 24.71",
      "E. No hay intervalo de 5 minutos. Es algún valor entre 24.71 y 35.31"
    ],
    "answer": "B",
    "explicacion": "El comando uptime reporta el 'load average' para 1, 5 y 15 minutos respectivamente. El segundo número (24.71) representa el periodo de 5 minutos.",
    "pista": "El orden de los promedios de carga siempre es 1, 5 y 15 minutos."
    },
    {
    "question": "8. ¿Cuáles de las siguientes herramientas pueden usarse para recolectar datos para la planificación de capacidad? (Selecciona DOS respuestas correctas).",
    "options": [
      "A. sar",
      "B. psstat",
      "C. iostat",
      "D. hwtop",
      "E. sysio"
    ],
    "answer": "A, C",
    "explicacion": "sar permite recolectar y reportar actividades del sistema a lo largo del tiempo, mientras que iostat se enfoca en las estadísticas de carga de los dispositivos de entrada/salida.",
    "pista": "Busca comandos que formen parte del paquete de utilidades sysstat."
    },
    {
    "question": "9. ¿Cuál es la diferencia clave entre una imagen de kernel zImage y bzImage?",
    "options": [
      "A. zImage se comprime con gzip, bzImage con bzip2.",
      "B. zImage está limitada a 64k, bzImage no tiene tal restricción.",
      "C. zImage está limitada a 512k, bzImage no tiene tal restricción.",
      "D. zImage es para kernels serie 2.6, bzImage para serie 3.x y posteriores."
    ],
    "answer": "C",
    "explicacion": "Históricamente, zImage se cargaba en el espacio de memoria baja (primeros 640 KB), lo que limitaba su tamaño a unos 512 KB. bzImage permite cargar el kernel en memoria alta para archivos más grandes.",
    "pista": "La 'b' en bzImage significa 'big' (grande)."
    },
    {
    "question": "10. Para mostrar información sobre el hardware de un sistema Linux, ¿qué comandos pueden usarse? (Elige TRES correctas).",
    "options": [
      "A. lsdev",
      "B. lsusb",
      "C. lspci",
      "D. lsmem",
      "E. lskvm"
    ],
    "answer": "A, B, C",
    "explicacion": "'lsdev' muestra información sobre dispositivos e interrupciones, 'lsusb' lista dispositivos USB y 'lspci' muestra todos los dispositivos en el bus PCI.",
    "pista": "Todos los comandos correctos comienzan con el prefijo 'ls' (listar)."
    },
    {
    "question": "11. ¿Qué comando se utiliza para descargar un solo módulo actualmente cargado por el kernel sin descargar otros módulos de los que dependa? (Escribe solo el comando).",
    "options": [],
    "answer": "rmmod",
    "explicacion": "El comando 'rmmod' elimina un módulo específico del kernel. A diferencia de 'modprobe -r', 'rmmod' es más simple y no intenta resolver dependencias automáticamente al descargar.",
    "pista": "Es la forma abreviada de 'Remove Module'."
    },
    {
    "question": "12. ¿Qué términos se utilizan para describir los lanzamientos del kernel 3.x y 4.x? (Elige TRES respuestas correctas).",
    "options": [
      "A. beta",
      "B. longterm",
      "C. prerelease",
      "D. releasecandidate",
      "E. stable"
    ],
    "answer": "B, D, E",
    "explicacion": "El desarrollo del kernel de Linux utiliza 'stable' para versiones listas para producción, 'longterm' para las que tienen soporte extendido y 'releasecandidate' (RC) para versiones de prueba antes del lanzamiento final.",
    "pista": "Piensa en las categorías que verías en el sitio oficial kernel.org."
    },
    {
    "question": "13. ¿Cuál de los siguientes comandos cambia al directorio que contiene los módulos del kernel que se está ejecutando actualmente?",
    "options": [
      "A. cd /lib/modules/$(uname -r)",
      "B. cd /lib/modules/$(kernel -v)",
      "C. cd /lib/modules/current",
      "D. cd /lib/modules/running",
      "E. cd /lib/modules/$(uptime -k)"
    ],
    "answer": "A",
    "explicacion": "En Linux, los módulos se almacenan en /lib/modules/ bajo un subdirectorio nombrado exactamente como la versión del kernel. El comando 'uname -r' devuelve ese nombre específico.",
    "pista": "Necesitas un comando que devuelva la versión ('release') del kernel actual."
    },
    {
    "question": "14. ¿Qué formatos de compresión se pueden utilizar para crear imágenes initramfs? (Elige DOS respuestas correctas).",
    "options": [
      "A. gzip",
      "B. arc",
      "C. rar",
      "D. cpio",
      "E. bzip2"
    ],
    "answer": "A, E",
    "explicacion": "initramfs es usualmente un archivo cpio comprimido. Los algoritmos de compresión más comunes y soportados por el kernel para este propósito son gzip y bzip2.",
    "pista": "Busca formatos de compresión de código abierto comúnmente usados en entornos Linux."
    },
    {
    "question": "15. ¿Qué comando se puede utilizar para añadir mejoras o código actualizado al código fuente del kernel a partir de un archivo generado por el comando 'diff'?",
    "options": [
      "A. kernel.update",
      "B. patch",
      "C. patch-kernel",
      "D. upgrade",
      "E. upgrade-kernel"
    ],
    "answer": "B",
    "explicacion": "El comando 'patch' toma un archivo de diferencias (patchfile) creado por 'diff' y aplica esos cambios directamente a los archivos de código fuente originales.",
    "pista": "Es la herramienta clásica para aplicar 'parches' de código."
    },
    {
    "question": "16. ¿Cómo se puede cambiar el parámetro del kernel para el tamaño máximo de un segmento de memoria compartida (shmmax) a 2 GiB (2,147,483,648 Bytes) en un sistema en ejecución? (Elige DOS respuestas correctas).",
    "options": [
      "A. Editar /etc/shmmax y establecer el parámetro en 2147483648",
      "B. sysctl shmmax=2147483648",
      "C. sysctl -w kernel.shmmax=2147483648",
      "D. echo 2147483648 > /proc/sys/kernel/shmmax",
      "E. export kernel.shmmax=2147483648"
    ],
    "answer": "C, D",
    "explicacion": "Para modificar parámetros del kernel en tiempo de ejecución, se puede utilizar el comando sysctl con el parámetro -w o escribir el nuevo valor directamente en la entrada correspondiente dentro de /proc/sys/.",
    "pista": "Busca métodos que interactúen directamente con la interfaz sysctl o el sistema de archivos /proc."
    },
    {
    "question": "17. ¿Para qué se utiliza el comando 'mt'?",
    "options": [
      "A. Se utiliza para montar unidades de cinta SCSI.",
      "B. Formatea cintas SCSI para ser utilizadas con tar.",
      "C. Es un reemplazo de dd para escribir datos en unidades de cinta SCSI.",
      "D. Posiciona una cinta SCSI en una ubicación específica.",
      "E. Marca una cinta SCSI con un identificador único (UUID)."
    ],
    "answer": "D",
    "explicacion": "El comando mt (magnetic tape) se utiliza para controlar las operaciones de las unidades de cinta magnética, como avanzar, retroceder o posicionar la cinta.",
    "pista": "Relaciona el nombre del comando con 'Magnetic Tape' y el control de su movimiento físico."
    },
    {
    "question": "18. ¿Cuál de los siguientes comandos copia de forma segura el directorio /fyf/ a /var/tmp/ en el host remoto 'deltaur' utilizando la cuenta de usuario remoto 'alice'?",
    "options": [
      "A. rsync -a -e ssh alice@deltaur:/var/tmp/ fyf/",
      "B. rsync -a -u alice -e ssh fyf/ deltaur:/var/tmp/",
      "C. rsync -a -u alice -e ssh deltaur:/var/tmp/ fyf/",
      "D. rsync -a -e ssh fyf/ alice@deltaur:/var/tmp/"
    ],
    "answer": "D",
    "explicacion": "La sintaxis correcta de rsync para copias remotas seguras mediante SSH es: rsync [opciones] [origen_local] [usuario]@[host_remoto]:[destino_remoto].",
    "pista": "Asegúrate de que el orden sea 'origen' seguido de 'destino' y que la identidad del usuario esté vinculada al host remoto."
    },
    {
    "question": "19. ¿Por qué no debería utilizarse el comando 'zip' para crear copias de seguridad (backups) de sistemas de archivos Linux?",
    "options": [
      "A. No existe para el sistema operativo Linux.",
      "B. No almacena la propiedad (propietario/grupo) ni los permisos.",
      "C. Solo se puede usar para comprimir archivos individuales, no estructuras de directorios.",
      "D. Solo puede almacenar archivos de hasta 1 GiB y, por lo tanto, no es adecuado para archivos grandes de Linux."
    ],
    "answer": "B",
    "explicacion": "A diferencia de herramientas nativas como tar, el formato zip no preserva adecuadamente los metadatos de archivos de Linux, como los permisos (rwx) y la pertenencia a usuarios/grupos, lo cual es crítico en un backup.",
    "pista": "Piensa en qué información esencial de un archivo se pierde al moverlo entre diferentes sistemas operativos."
    },
    {
    "question": "20. ¿Qué comando se puede utilizar para colocar un archivo en una posición específica dentro del árbol del sistema de archivos y establecer el propietario, el grupo y los permisos con una sola invocación? (Especifica SOLO el comando sin ninguna ruta ni parámetros).",
    "options": [],
    "answer": "install",
    "explicacion": "El comando 'install' combina las funcionalidades de cp, chown y chmod. Permite copiar archivos a un destino mientras se especifican simultáneamente sus atributos de seguridad.",
    "pista": "Es una herramienta comúnmente utilizada en procesos de instalación de software desde el código fuente."
    },
    {
    "question": "21. ¿Qué archivo contiene el mensaje que se muestra encima del prompt de inicio de sesión de la consola del sistema? (Especifica el nombre completo del archivo, incluyendo la ruta).",
    "options": [],
    "answer": "/etc/issue",
    "explicacion": "/etc/issue es un archivo de texto que el sistema muestra antes del prompt de login. Puede contener secuencias de escape para mostrar información como la versión del kernel o la fecha actual.",
    "pista": "Se encuentra en el directorio de configuración del sistema y su nombre se refiere a un 'asunto' o 'emisión'."
    },
    {
    "question": "22. ¿Cuáles de los siguientes objetivos se incluyen habitualmente en un makefile que forma parte de un paquete de código fuente?",
    "options": [
      "A. CFLAGS, CPPFLAGS, LIBS, LDFLAGS",
      "B. clean, install, uninstall",
      "C. PATHS, DESTDIR, LIBS, LDFLAGS",
      "D. prefix, exec_prefix, bindir, mandir"
    ],
    "answer": "B",
    "explicacion": "En el desarrollo de software bajo sistemas Unix/Linux, los archivos Makefile suelen definir 'targets' como clean (limpiar archivos objeto), install (instalar el software) y uninstall (removerlo).",
    "pista": "Piensa en las acciones comunes que realizas después de compilar código fuente con el comando make."
    },
    {
    "question": "23. ¿Cuál de los siguientes comandos puede utilizarse para programar interacciones con diversos servicios TCP o UDP?",
    "options": [
      "A. ftp",
      "B. nc",
      "C. tcpdump",
      "D. strings",
      "E. wget"
    ],
    "answer": "B",
    "explicacion": "Netcat (nc) es una herramienta de red muy versátil que permite abrir conexiones TCP/UDP, enviar datos y escuchar en puertos, facilitando la creación de scripts para probar servicios.",
    "pista": "Es conocida frecuentemente como la 'navaja suiza' de las redes TCP/IP."
    },
    {
    "question": "24. ¿Cuáles de los siguientes comandos listan los vecinos IPv4 del sistema local, incluyendo las direcciones IP y MAC? (Elige DOS respuestas correctas).",
    "options": [
      "A. arp",
      "B. ifconfig -lv eth0",
      "C. netstat -al",
      "D. ip neigh show"
    ],
    "answer": "A, D",
    "explicacion": "El comando tradicional 'arp' muestra la caché ARP del sistema. La suite moderna iproute2 utiliza 'ip neigh show' para mostrar la misma información sobre los vecinos de la red.",
    "pista": "Busca un comando clásico y otro perteneciente a la familia de comandos 'ip'."
    },
    {
    "question": "25. ¿Qué comando se puede utilizar para escanear una red específica buscando direcciones IP que parezcan estar en uso?",
    "options": [
      "A. nmap",
      "B. tcpdump",
      "C. ip",
      "D. netscan",
      "E. hostdiscover"
    ],
    "answer": "A",
    "explicacion": "Nmap (Network Mapper) es una herramienta de código abierto para exploración de red y auditoría de seguridad que permite descubrir hosts y servicios en una red informática.",
    "pista": "Es la herramienta más famosa para realizar escaneos de puertos y descubrimiento de red."
    },
    {
    "question": "26. ¿Cuáles de las siguientes acciones se pueden realizar con el comando 'hostname'? (Elige TRES respuestas correctas).",
    "options": [
      "A. Mostrar el nombre de host del nodo local, incluyendo el dominio.",
      "B. Establecer un nuevo nombre de host para el nodo local.",
      "C. Mostrar todas las direcciones IP asociadas con el nodo local.",
      "D. Mostrar todas las direcciones MAC del nodo local.",
      "E. Mostrar todos los nombres de host utilizados en el pasado."
    ],
    "answer": "A, B, C",
    "explicacion": "El comando hostname gestiona el nombre del sistema, pero también puede consultar la configuración de red básica para listar las IPs asignadas mediante parámetros como -I.",
    "pista": "Recuerda que este comando puede tanto 'leer' como 'escribir' la identidad del sistema en la red."
    },
    {
    "question": "27. ¿Bajo qué circunstancias el comando 'ping' mostraría la cadena (DUP!) en su salida?",
    "options": [
      "A. Cuando el host receptor está en una red diferente.",
      "B. Cuando los paquetes ICMP se envían a una dirección de broadcast y varios hosts responden.",
      "C. Cuando el host receptor está ejecutando múltiples procesos del servidor pingd.",
      "D. Cuando el host que envía el paquete ICMP es el mismo que el que lo recibe."
    ],
    "answer": "B",
    "explicacion": "El mensaje DUP! (duplicate) aparece cuando el comando recibe más de una respuesta para un mismo número de secuencia, lo cual ocurre habitualmente en transmisiones dirigidas a broadcast.",
    "pista": "Relaciona 'DUP' con duplicidad o respuestas múltiples inesperadas."
    },
    {
    "question": "28. ¿Qué entradas de /etc/hosts.allow permiten el acceso a sshd para los usuarios de la subred 192.168.1.0/24? (Elige DOS respuestas correctas).",
    "options": [
      "A. sshd : 192.168.1.",
      "B. sshd : 192.168.1",
      "C. sshd : 192.168.1.0 netmask 255.255.255.0",
      "D. sshd : 192.168.1.0/255.255.255.0",
      "E. sshd : 192.168.1.0"
    ],
    "answer": "A, D",
    "explicacion": "Los TCP Wrappers permiten especificar subredes dejando un punto al final para representar el segmento o utilizando la notación completa de dirección/máscara.",
    "pista": "Verifica qué formatos de dirección de red son aceptados sintácticamente por los archivos de configuración de TCP Wrappers."
    },
    {
    "question": "29. Un servidor multihogar muestra la siguiente salida al usar el comando 'ip route show':\nDefault via 192.168.0.1 dev wwan0 proto static metric 50\nDefault via 192.168.1.1 dev wwan1 metric 500\n192.168.0.0/24 dev wwan0 proto kernel scope link src 192.168.0.2 linkdown\n192.168.1.0/24 dev wwan1 proto kernel scope link src 192.168.1.2 metric 500\n¿Qué interfaz se utiliza para enrutar paquetes a 192.168.3.1? (Especifica SOLO el nombre de la interfaz).",
    "options": [],
    "answer": "wwan0",
    "explicacion": "El destino 192.168.3.1 no coincide con ninguna de las rutas específicas de red local, por lo que se utiliza la ruta por defecto ('default via'). Al haber dos rutas por defecto disponibles, el kernel elige la que tiene la métrica más baja, que en este caso es wwan0 con una métrica de 50.",
    "pista": "Compara los valores de 'metric' para ambas rutas por defecto; el número más bajo indica la ruta preferida."
    },
    {
    "question": "30. ¿Cuál de los siguientes comandos enumera todas las redes inalámbricas visibles para la interfaz wlan0?",
    "options": [
      "A. iwlist scan wlan0",
      "B. iw scan wlan0",
      "C. iw list wlan0",
      "D. iwlist wlan0 scan",
      "E. iw dev wlan0 list"
    ],
    "answer": "A",
    "explicacion": "El comando 'iwlist' con el parámetro 'scan' se utiliza para obtener una lista de los puntos de acceso inalámbricos detectados por la interfaz de red especificada.",
    "pista": "Busca la herramienta que permite realizar un 'escaneo' (scan) de frecuencias inalámbricas."
    },
    {
    "question": "31. ¿Cuál es el subcomando por defecto del comando 'ip addr' cuando no se proporciona ningún subcomando como 'add' o 'del' en la línea de comandos? (Especifica SOLO el subcomando sin parámetros).",
    "options": [],
    "answer": "show",
    "explicacion": "En la utilidad 'ip', si se invoca un objeto como 'addr' (address) sin una acción específica, el comportamiento predeterminado es mostrar la información actual.",
    "pista": "Es el término en inglés que significa 'mostrar' o 'ver'."
    },
    {
    "question": "32. ¿Cuáles de las siguientes acciones aseguran que los cambios surtan efecto después de actualizar el archivo de configuración de syslogd? (Elige DOS respuestas correctas).",
    "options": [
      "A. No se requiere ninguna acción, syslogd notará el archivo de configuración actualizado después de unos minutos.",
      "B. Enviar la señal HUP al proceso syslogd.",
      "C. Reiniciar el servicio syslogd.",
      "D. Ejecutar el comando syslogd -u"
    ],
    "answer": "B, C",
    "explicacion": "La mayoría de los demonios de Linux necesitan ser reiniciados o recibir una señal de colgar (HUP - Hang UP) para recargar y aplicar nuevos parámetros de configuración sin interrumpir el sistema de forma permanente.",
    "pista": "Piensa en métodos estándar para obligar a un servicio a leer sus archivos de configuración de nuevo."
    },
    {
    "question": "33. El siguiente es un extracto de la salida de tcpdump -nli eth1 'tcp'. ¿Qué servicio o protocolo de red se utilizó probablemente?",
    "options": [
      "A. FTP",
      "B. HTTP",
      "C. SSH",
      "D. DNS",
      "E. DHCP"
    ],
    "answer": "C",
    "explicacion": "En la salida del comando, se observa que el tráfico se dirige al host 169.90.69.235 a través del puerto 22. El puerto 22 es el puerto estándar asignado para el protocolo SSH.",
    "pista": "Observa el número que aparece después de la dirección IP de destino e identifica qué servicio utiliza ese puerto por defecto."
    },
    {
    "question": "34. ¿Qué archivo en /proc contiene información sobre el estado de los dispositivos RAID por software locales?",
    "options": [
      "A. /proc/raidstat",
      "B. /proc/mdstat",
      "C. /proc/raidstatus",
      "D. /proc/mdstatus",
      "E. /proc/raid/status"
    ],
    "answer": "B",
    "explicacion": "El archivo /proc/mdstat es una interfaz virtual del kernel que muestra el estado actual de los dispositivos de disco múltiple (RAID por software) administrados por el controlador md.",
    "pista": "Busca el archivo que hace referencia a 'Multiple Devices' (md)."
    },
    {
    "question": "35. El disco duro /dev/sda no tiene habilitada la caché de escritura. ¿Qué comando se utiliza para habilitar la caché de escritura en /dev/sda?",
    "options": [
      "A. hdparm -c 1 /dev/sda",
      "B. hdparm --enable-write-cache /dev/sda",
      "C. hdparm --wce 1 /dev/sda",
      "D. hdparm -D 1 /dev/sda",
      "E. hdparm -W 1 /dev/sda"
    ],
    "answer": "E",
    "explicacion": "El comando hdparm con el parámetro -W seguido de un 1 permite activar la caché de escritura del dispositivo especificado para mejorar el rendimiento.",
    "pista": "El parámetro utiliza la letra 'W' mayúscula de 'Write cache'."
    },
    {
    "question": "36. ¿Qué valor de nivel RAID debe utilizarse con el RAID por software de Linux para crear un conjunto de dispositivos espejados (mirrored)?",
    "options": [
      "A. 1",
      "B. 5",
      "C. 6",
      "D. container",
      "E. mirrorstripe"
    ],
    "answer": "A",
    "explicacion": "RAID 1 es el estándar para el espejado de datos, donde la información se duplica exactamente en dos o más discos.",
    "pista": "Es el nivel básico de redundancia que requiere al menos dos discos para replicar datos."
    },
    {
    "question": "37. ¿Cuáles son los valores posibles para node.startup en el archivo iscsid.conf? (Elige DOS respuestas correctas).",
    "options": [
      "A. login",
      "B. iniciate",
      "C. manual",
      "D. discover",
      "E. automatic"
    ],
    "answer": "C, E",
    "explicacion": "La directiva node.startup en la configuración de iSCSI determina si el inicio de sesión en el nodo debe ser gestionado manualmente por el administrador o de forma automática al arrancar el sistema.",
    "pista": "Piensa en las dos formas principales de iniciar un servicio: por el usuario o por el sistema."
    },
    {
    "question": "38. ¿Cuál de los siguientes es un ejemplo de una ruta a un conjunto RAID por software de Linux?",
    "options": [
      "A. /dev/raid0",
      "B. /dev/rd1",
      "C. /dev/pr0",
      "D. /dev/md1"
    ],
    "answer": "D",
    "explicacion": "En Linux, los dispositivos RAID por software se identifican comúnmente en el directorio /dev/ con el prefijo 'md' (Multiple Device) seguido de un número.",
    "pista": "Los dispositivos RAID de software suelen empezar con 'md'."
    },
    {
    "question": "39. ¿Qué comando se utiliza para añadir un volumen físico adicional a un grupo de volúmenes? (Especifica SOLO el comando sin ninguna ruta ni parámetros).",
    "options": [],
    "answer": "vgextend",
    "explicacion": "El comando vgextend se utiliza dentro de la administración de LVM para ampliar la capacidad de un grupo de volúmenes (VG) añadiendo uno o más volúmenes físicos (PV).",
    "pista": "Es una combinación de 'Volume Group' y 'Extend'."
    },
    {
    "question": "40. ¿Qué dos comandos de LVM faltan en la siguiente secuencia utilizada para crear, formatear, montar y hacer uso de un volumen lógico?\nPvcreate, _______________, _______________, mkfs, mount",
    "options": [
      "A. lvcreate, mdadm",
      "B. lvcreate, vgcreate",
      "C. lvmcreate, vgcreate",
      "D. vgcreate, lvcreate",
      "E. vgcreate, mdadm"
    ],
    "answer": "D",
    "explicacion": "El flujo de trabajo estándar en LVM requiere primero inicializar el volumen físico (pvcreate), luego agruparlos en un grupo de volúmenes (vgcreate) y finalmente segmentar ese espacio en volúmenes lógicos (lvcreate) antes de aplicar un sistema de archivos.",
    "pista": "Sigue el orden jerárquico de LVM: Físico -> Grupo -> Lógico."
    },
    {
    "question": "41. Un servidor requiere una opción de arranque GRUB2 que siempre inicie en el runlevel 1. ¿Qué comando en un archivo de configuración de GRUB2 inicia el comienzo de los ajustes necesarios para que esta nueva opción esté disponible?",
    "options": [
      "A. initrd",
      "B. linux",
      "C. menuentry",
      "D. runlevel"
    ],
    "answer": "C",
    "explicacion": "En la configuración de GRUB2, la directiva 'menuentry' define el inicio de un bloque de configuración para una nueva entrada en el menú de arranque del sistema.",
    "pista": "Es el término que define una 'entrada de menú' individual."
    },
    {
    "question": "42. ¿Qué tipo de unidades de systemd proporcionan una funcionalidad similar a los runlevels de SysV init?",
    "options": [
      "A. level",
      "B. destination",
      "C. target",
      "D. mode",
      "E. service"
    ],
    "answer": "C",
    "explicacion": "Systemd utiliza unidades de tipo '.target' para agrupar servicios y definir estados del sistema, reemplazando el antiguo concepto de runlevels de SysV.",
    "pista": "Estas unidades sirven como puntos de sincronización o 'objetivos' de estado."
    },
    {
    "question": "43. ¿Qué comando de systemd encuentra y muestra archivos de configuración de systemd que han sido sobrescritos? (Especifica SOLO el comando sin ninguna ruta ni parámetros).",
    "options": [],
    "answer": "systemd-delta",
    "explicacion": "El comando 'systemd-delta' se utiliza para identificar y comparar archivos de configuración que han sido modificados o sobrescritos en los directorios de configuración del sistema frente a los valores por defecto.",
    "pista": "El nombre hace referencia a la diferencia o 'delta' entre configuraciones."
    },
    {
    "question": "44. En un sistema SysV-init, ¿qué archivo controla el inicio y parada de apache2 y es referenciado por los directorios de runlevel?",
    "options": [
      "A. /etc/init.d/apache2",
      "B. /etc/rc2.d/70apache2",
      "C. /etc/rc2.d/apache2",
      "D. /etc/rc2.d/apache2.start"
    ],
    "answer": "A",
    "explicacion": "El script de control principal reside en /etc/init.d/, mientras que los directorios rcX.d contienen enlaces simbólicos hacia él.",
    "pista": "Es el script original 'maestro' localizado en el directorio init.d."
    },
    {
    "question": "45. ¿En qué directorio se almacena el archivo de configuración grub.cfg de GRUB 2? (Especifica la ruta completa al directorio).",
    "options": [],
    "answer": "/boot/grub2",
    "explicacion": "Aunque la ubicación puede variar ligeramente por distribución, el estándar para GRUB2 es guardar su configuración generada en /boot/grub2.",
    "pista": "Está dentro de /boot/ y se refiere a la versión 2 del cargador."
    },
    {
    "question": "46. Durante el arranque, cuando el kernel carga un archivo initramfs, ¿qué comando del initramfs se ejecutará primero, si está presente?",
    "options": [
      "A. /init",
      "B. /initrd",
      "C. /linuxrd",
      "D. /rc.local",
      "E. /sbin/init"
    ],
    "answer": "A",
    "explicacion": "El kernel busca y ejecuta el script '/init' en la raíz del sistema de archivos temporal (initramfs) para preparar el montaje del sistema real.",
    "pista": "Es un ejecutable simple llamado 'init' en el directorio raíz."
    },
    {
    "question": "47. ¿Cuál es la funcionalidad que proporciona PXE?",
    "options": [
      "A. The ability to boot a computer using its network interface.",
      "B. The ability to launch a remote X11 desktop on a computer.",
      "C. The ability to verify a system’s configuration after completing the process.",
      "D. The ability to verify a system’s configuration before completing the boot process."
    ],
    "answer": "A",
    "explicacion": "PXE (Preboot Execution Environment) permite que una computadora arranque utilizando su tarjeta de red antes de cargar un sistema operativo local.",
    "pista": "Se utiliza comúnmente para instalaciones remotas o estaciones de trabajo sin disco."
    },
    {
    "question": "48. ¿Cuál de los siguientes sistemas de archivos se puede utilizar al preparar una Partición de Sistema EFI (ESP)?",
    "options": [
      "A. ext4",
      "B. Btrfs",
      "C. XFS",
      "D. CramFS",
      "E. FAT32"
    ],
    "answer": "E",
    "explicacion": "La especificación EFI requiere que la Partición de Sistema EFI esté formateada en una variante del sistema de archivos FAT, siendo FAT32 el estándar más común para asegurar la compatibilidad con el firmware de la placa base.",
    "pista": "Es un sistema de archivos muy antiguo y ampliamente compatible con casi todos los dispositivos."
    },
    {
    "question": "49. ¿Cuáles de los siguientes elementos son cargadores de arranque (boot loaders) alternativos de Linux? (Elige TRES respuestas correctas).",
    "options": [
      "A. SYSLINUX",
      "B. NTLINUX",
      "C. PXELINUX",
      "D. ISOLINUX",
      "E. UEFILINUX"
    ],
    "answer": "A, C, D",
    "explicacion": "SYSLINUX es una familia de cargadores de arranque ligeros que incluye ISOLINUX (para CD-ROMs), PXELINUX (para arranque por red) y el propio SYSLINUX para sistemas de archivos FAT.",
    "pista": "Busca los términos que forman parte de la familia del proyecto Syslinux."
    },
    {
    "question": "50. El archivo de configuración principal de autofs tiene esta entrada: /home /etc/auto.home. ¿Cuál es el significado del archivo /etc/auto.home?",
    "options": [
      "A. Contiene los mapas indirectos para el montaje de sistemas de archivos.",
      "B. Contiene información de configuración, como contraseñas y claves, para el servidor de archivos remoto.",
      "C. Contiene información de configuración sobre los ajustes del punto de montaje /home.",
      "D. Contiene la clave SSL para permitir la autenticación en el servidor de archivos remoto."
    ],
    "answer": "A",
    "explicacion": "En autofs, el archivo maestro (/etc/auto.master) asocia un punto de montaje con un 'mapa'. En este caso, /etc/auto.home es un mapa indirecto que define qué subdirectorios dentro de /home se montarán y desde dónde.",
    "pista": "Piensa en cómo autofs organiza los montajes dinámicos mediante el uso de 'maps'."
    },
    {
    "question": "51. Al realizar comprobaciones automáticas del sistema de archivos durante el inicio del sistema, ¿qué valor se utiliza normalmente para el sistema de archivos raíz en el último campo (orden de fsck) de /etc/fstab?",
    "options": [
      "A. Se deja en blanco",
      "B. Se utiliza un valor de 0 (cero).",
      "C. Se utiliza un valor de 1 (uno).",
      "D. Se utiliza un valor de 2 (dos).",
      "E. El valor depende de cuántos sistemas de archivos raíz estén presentes."
    ],
    "answer": "C",
    "explicacion": "El sexto campo de /etc/fstab indica el orden de revisión de fsck. El sistema de archivos raíz (/) debe tener un 1 para ser el primero en ser revisado, mientras que otros sistemas de archivos suelen tener un 2 o 0 para omitir la revisión.",
    "pista": "El sistema raíz siempre es la prioridad número uno para el chequeo de integridad."
    },
    {
    "question": "52. ¿Cuál de los siguientes comandos muestra el UUID, la etiqueta (label) y el tipo de todas las particiones y volúmenes de un sistema Linux?",
    "options": [
      "A. lsdevs",
      "B. blkid",
      "C. lsmount",
      "D. blkls",
      "E. blkinfo"
    ],
    "answer": "B",
    "explicacion": "El comando blkid (block id) se utiliza para localizar y mostrar los atributos de los dispositivos de bloque, incluyendo el UUID, TYPE y LABEL.",
    "pista": "Es la abreviatura de 'Block ID'."
    },
    {
    "question": "53. ¿Cuáles de los siguientes son tipos de sistemas de archivos de Linux comunes utilizados para las particiones raíz? (Elige TRES respuestas correctas).",
    "options": [
      "A. ext4",
      "B. VFAT",
      "C. NTFS",
      "D. XFS",
      "E. Btrfs"
    ],
    "answer": "A, D, E",
    "explicacion": "ext4, XFS y Btrfs son sistemas nativos de Linux que soportan permisos POSIX. VFAT y NTFS son sistemas de Windows que no pueden manejar correctamente los permisos de archivos requeridos por la raíz de Linux.",
    "pista": "Identifica los sistemas de archivos que son nativos de Linux y modernos."
    },
    {
    "question": "54. ¿Qué archivos se actualizan a medida que los dispositivos se montan y desmontan para proporcionar información sobre los dispositivos montados actualmente y las opciones utilizadas?",
    "options": [
      "A. /proc/dtab",
      "B. /etc/mtab",
      "C. /etc/fstab",
      "D. /proc/mounts",
      "E. /proc/devices"
    ],
    "answer": "B, D",
    "explicacion": "/etc/mtab guarda históricamente la tabla de montajes actuales, mientras que /proc/mounts es la vista en tiempo real que ofrece el kernel sobre el estado del sistema.",
    "pista": "Busca uno en el directorio de configuración (/etc) y otro en el sistema de archivos virtual del kernel (/proc)."
    },
    {
    "question": "55. ¿En qué lugar colocaría fsck cualquier archivo sin referencia o fragmentos de archivos en un sistema de archivos ext4?",
    "options": [
      "A. recover",
      "B. lost+found",
      "C. back",
      "D. lost"
    ],
    "answer": "B",
    "explicacion": "Cuando fsck encuentra datos que no pertenecen a ningún archivo conocido, los recupera y los guarda en el directorio 'lost+found' en la raíz de la partición correspondiente.",
    "pista": "Es ese directorio que suele aparecer al listar la raíz de un disco y que significa 'perdido y encontrado'."
    },
    {
    "question": "56. ¿Cuántas contraseñas diferentes se pueden usar para una partición LUKS al mismo tiempo?",
    "options": [
      "A. 4",
      "B. 8",
      "C. 16",
      "D. 32",
      "E. 64"
    ],
    "answer": "B",
    "explicacion": "El estándar LUKS (Linux Unified Key Setup) reserva 8 ranuras de llaves (key slots), lo que permite configurar hasta 8 frases de contraseña o archivos de llave distintos para desbloquear el mismo volumen.",
    "pista": "Es una potencia de 2, menos de 10."
    },
    {
    "question": "57. ¿Qué comando se utiliza para recuperar los valores SMART de un disco duro? (Especifica ÚNICAMENTE el comando sin rutas ni parámetros).",
    "options": [],
    "answer": "smartctl",
    "explicacion": "smartctl es la herramienta de línea de comandos para controlar y monitorear sistemas de almacenamiento utilizando SMART (Self-Monitoring, Analysis and Reporting Technology).",
    "pista": "Combina la palabra 'smart' con la abreviatura de 'control'."
    },
    {
    "question": "58. ¿Cuál es el orden correcto de los campos en el archivo /etc/fstab?",
    "options": [
      "A. nombre del dispositivo; tipo de sistema de archivos; punto de montaje; opciones de montaje; volcado (dump); orden de fsck",
      "B. nombre del dispositivo; punto de montaje; tipo de sistema de archivos; opciones de montaje; volcado (dump); orden de fsck",
      "C. nombre del dispositivo; punto de montaje; opciones de montaje; tipo de sistema de archivos; volcado (dump); orden de fsck",
      "D. punto de montaje; tipo de sistema de archivos; nombre del dispositivo; opciones de montaje; volcado (dump); orden de fsck",
      "E. punto de montaje; nombre del dispositivo; tipo de sistema de archivos; opciones de montaje; volcado (dump); orden de fsck"
    ],
    "answer": "B",
    "explicacion": "El formato estándar de fstab sigue la secuencia: Device, Mount Point, File System Type, Options, Dump, y Pass (fsck).",
    "pista": "Recuerda el orden: ¿Qué disco? ¿Dónde va? ¿Qué formato tiene? ¿Cómo se monta? y finalmente los números de control."
    },
    {
    "question": "59. ¿Cuál de los siguientes es un efecto secundario del uso extensivo del espacio de intercambio (swap)?",
    "options": [
      "A. El sistema de archivos raíz puede llenarse porque la swap siempre está allí.",
      "B. El rendimiento general del sistema puede degradarse debido al uso intenso del disco duro y la reorganización de la memoria.",
      "C. La RAM puede quedar sin uso si el kernel no mueve procesos de vuelta de la swap.",
      "D. La memoria puede fragmentarse y ralentizar el acceso a las páginas.",
      "E. Las aplicaciones necesitan reiniciarse porque sus direcciones virtuales cambian."
    ],
    "answer": "B",
    "explicacion": "El acceso al disco duro es miles de veces más lento que a la RAM. Cuando el sistema depende demasiado de la swap (thrashing), el rendimiento cae drásticamente debido a la latencia de entrada/salida del disco.",
    "pista": "La swap es mucho más lenta que la memoria física."
    },
    {
    "question": "60. ¿Cuáles de los siguientes son nombres posibles para el primer volumen lógico llamado vo101 en el grupo de volúmenes vg01? (Elige TRES respuestas correctas).",
    "options": [
      "A. /dev/dm-0",
      "B. /dev/md-0",
      "C. /dev/mapper-vg01-vo11",
      "D. /dev/mapper/vg01-vo101",
      "E. /dev/vg01/vo101"
    ],
    "answer": "A, D, E",
    "explicacion": "LVM crea nombres persistentes. /dev/dm-0 es el nombre interno del mapeador. /dev/mapper/vg01-vo101 es el formato del mapeador de dispositivos, y /dev/vg01/vo101 es el enlace simbólico amigable.",
    "pista": "Busca los formatos que incluyan tanto el grupo (vg01) como el volumen (vo101) o el dispositivo interno de mapeo."
    }
]