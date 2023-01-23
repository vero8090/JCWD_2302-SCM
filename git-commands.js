//1. git init 
//untuk meng generate folder .git (biasanya di hide), tulis di terminal, pastikan di dalam
// folder project nya

//2. misal ingin ngirim perubahan index.js
//caranya:

// kita pilih dulu filenya :
// git add index.js
// git add . (ini untuk satu folder)

// lalu kita commit (ini untuk ke local) :
// git commit -m "Create variable inside index.js"

// lalu di git log untuk mencatat perubahan :
// git log

//lalu upload ke github nya
// git remote add origin https://github.com/vero8090/JCWD_2302-SCM.git (warning: first initiate only)

//push ke origin master
// git push origin master


//buat delete branch:
// ada di github cari aja---

//kalo mau di ignore, tulis aja di git ignore, kalo folder make ./ atau /
// kalo file langsung tinggal nama filenya



//kalo ingin menambahkan branch baru
// git checkout -b (nama branch)
// git checkout -b Day01
// pojok kiri bawah entar keliatan branch yg dipake
// lalu add folder atau file
// lalu git commit (buat ke local)
// lalu git push origin (namaBranch)

//kalo masuk ke branch baru nya
// git checkout (namaBranch)
// git pull origin master (untuk mendapatkan update dari suatu branch, contoh master)