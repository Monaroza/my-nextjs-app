# my-nextjs-app
# Todo Uygulaması

Bu proje, Next.js 13 ve Firebase kullanılarak geliştirilmiş bir Todo uygulamasıdır. Kullanıcıların giriş yapabileceği, kayıt olabileceği ve görevlerini yönetebileceği bir uygulama sağlar.

## Başlangıç

Bu kılavuz, projeyi yerel olarak nasıl çalıştıracağınızı ve kullanacağınızı açıklar.

### Gereksinimler

- [Node.js](https://nodejs.org/) (v14 veya üstü)
- [npm](https://www.npmjs.com/) (Node.js ile birlikte gelir)
- [Firebase](https://firebase.google.com/) hesabı

### Kurulum

1. Bu adımları takip ederek projeyi kurun:

   ```bash
   git clone https://github.com/kullanıcı_adı/repository_adı.git
   cd repository_adı
   npm install

   Firebase yapılandırmanızı oluşturun ve src/firebase.ts dosyasına ekleyin. Firebase yapılandırma ayarlarını Firebase Console'dan alabilirsiniz.

Projeyi çalıştırmak için:

bash
Kodu kopyala
npm run dev
Tarayıcınızda http://localhost:3000 adresini açarak uygulamayı görüntüleyebilirsiniz.

Kullanım
Giriş Yapma / Kayıt Olma: /auth sayfasına giderek kullanıcı girişi yapabilir veya yeni bir hesap oluşturabilirsiniz.
Todo Listesi: Giriş yaptıktan sonra ana sayfada görevlerinizi görebilir, yeni görev ekleyebilir, mevcut görevleri tamamlayabilir veya silebilirsiniz.



Özellikler
Kullanıcı kayıt ve giriş işlemleri.
Todo ekleme, güncelleme ve silme.
Firebase Firestore ile veri saklama.
Mobil uyumlu tasarım.

Kullanılan Teknolojiler
Next.js - React tabanlı framework.
Firebase - Backend hizmetleri.

Önemli Dosyalar ve Bileşenler
src/app/pages/auth.tsx
Bu dosya, kullanıcı kimlik doğrulama ve yetkilendirme işlemleri için kullanılan bileşeni içerir.

src/app/pages/todos.tsx
Bu dosya, todo listesi işlemleri için kullanılan bileşeni içerir.





