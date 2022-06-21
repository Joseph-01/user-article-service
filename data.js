const userData = [{
    "firstname": "John",
    "lastname": "doe",
    "username": "jjdoe",
    "email": "johnloe@gmail.com",
    "password": "joejohn"
},
{
    "firstname": "John2",
    "lastname": "doe2",
    "username": "jjdoe2",
    "email": "johnloe2@gmail.com",
    "password": "joejohn2"
}, {
    "firstname": "John3",
    "lastname": "doe3",
    "username": "jjdoe3",
    "email": "johnloe3@gmail.com",
    "password": "joejohn"
}]

const postData = [{
    "userId": "62adc990dba5319dd6776e8f",
    "title": "Post one by the user",
    "image": "",
    "caption": "caption for post one",
    "body": "Lorem Ipsum Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante. At ipsum vitae est lacinia tincidunt. Maecenas elit orci,gravida ut, molestie non, venenatis vel, lorem. Sedlacinia. Suspendisse potenti. Sed ultricies cursuslectus. In id magna sit amet nibh suspicit euismod.Integer enim. Donec sapien ante, accumsan ut,sodales commodo, auctor quis, lacus. Maecenas a elitlacinia urna posuere sodales. Curabitur pede pede,molestie id, blandit vitae, varius ac, purus. Mauris atipsum vitae est lacinia tincidunt. Maecenas elit orci, gravida ut, molestie non, venenatis vel,lorem. Sed lacinia. Suspendisse potenti. Sed ultrucies cursus lectus. In id magna sit amet nibhsuspicit euismod. Integer enim. Donec sapien ante, accumsan ut, sodales commodo, auctorquis, lacus. Maecenas a elit lacinia urna posuere sodales. Curabitur pede pede, molestie id,blandit vitae, varius ac, purus. Morbi dictum. Vestibulum adipiscing pulvinar quam. In aliquam rhoncus sem. In mi erat, sodaleseget, pretium interdum, malesuada ac, augue. Aliquam sollicitudin, massa ut vestibulum posuere, massa arcu elementumpurus, eget vehicula lorem metus vel libero. Sed in dui id lectus commodo elementum. Etiam rhoncus tortor. Proin alorem. Ut nec velit. Quisque varius. Proin nonummy justo dictum sapien tincidunt iaculis. Duis lobortis pellentesque risus.Aenean ut tortor imperdiet dolor scelerisque bibendum. Fusce metus nibh, adipiscing id, ullamcorper at, consequat a,nulla."

}, {
    "userId": "62adc990dba5319dd6776e8f",
    "title": "Post two by the user",
    "image": "",
    "caption": "caption for post two",
    "body": "Lorem Ipsum Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante. At ipsum vitae est lacinia tincidunt. Maecenas elit orci,gravida ut, molestie non, venenatis vel, lorem. Sedlacinia. Suspendisse potenti. Sed ultricies cursuslectus. In id magna sit amet nibh suspicit euismod.Integer enim. Donec sapien ante, accumsan ut,sodales commodo, auctor quis, lacus. Maecenas a elitlacinia urna posuere sodales. Curabitur pede pede,molestie id, blandit vitae, varius ac, purus. Mauris atipsum vitae est lacinia tincidunt. Maecenas elit orci, gravida ut, molestie non, venenatis vel,lorem. Sed lacinia. Suspendisse potenti. Sed ultrucies cursus lectus. In id magna sit amet nibhsuspicit euismod. Integer enim. Donec sapien ante, accumsan ut, sodales commodo, auctorquis, lacus. Maecenas a elit lacinia urna posuere sodales. Curabitur pede pede, molestie id,blandit vitae, varius ac, purus. Morbi dictum. Vestibulum adipiscing pulvinar quam. In aliquam rhoncus sem. In mi erat, sodaleseget, pretium interdum, malesuada ac, augue. Aliquam sollicitudin, massa ut vestibulum posuere, massa arcu elementumpurus, eget vehicula lorem metus vel libero. Sed in dui id lectus commodo elementum. Etiam rhoncus tortor. Proin alorem. Ut nec velit. Quisque varius. Proin nonummy justo dictum sapien tincidunt iaculis. Duis lobortis pellentesque risus.Aenean ut tortor imperdiet dolor scelerisque bibendum. Fusce metus nibh, adipiscing id, ullamcorper at, consequat a,nulla."

}, {
    "userId": "62b0b3018e7598f9988394be",
    "title": "Post three by the user",
    "image": "",
    "caption": "caption for post three",
    "body": "Lorem Ipsum Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante. At ipsum vitae est lacinia tincidunt. Maecenas elit orci,gravida ut, molestie non, venenatis vel, lorem. Sedlacinia. Suspendisse potenti. Sed ultricies cursuslectus. In id magna sit amet nibh suspicit euismod.Integer enim. Donec sapien ante, accumsan ut,sodales commodo, auctor quis, lacus. Maecenas a elitlacinia urna posuere sodales. Curabitur pede pede,molestie id, blandit vitae, varius ac, purus. Mauris atipsum vitae est lacinia tincidunt. Maecenas elit orci, gravida ut, molestie non, venenatis vel,lorem. Sed lacinia. Suspendisse potenti. Sed ultrucies cursus lectus. In id magna sit amet nibhsuspicit euismod. Integer enim. Donec sapien ante, accumsan ut, sodales commodo, auctorquis, lacus. Maecenas a elit lacinia urna posuere sodales. Curabitur pede pede, molestie id,blandit vitae, varius ac, purus. Morbi dictum. Vestibulum adipiscing pulvinar quam. In aliquam rhoncus sem. In mi erat, sodaleseget, pretium interdum, malesuada ac, augue. Aliquam sollicitudin, massa ut vestibulum posuere, massa arcu elementumpurus, eget vehicula lorem metus vel libero. Sed in dui id lectus commodo elementum. Etiam rhoncus tortor. Proin alorem. Ut nec velit. Quisque varius. Proin nonummy justo dictum sapien tincidunt iaculis. Duis lobortis pellentesque risus.Aenean ut tortor imperdiet dolor scelerisque bibendum. Fusce metus nibh, adipiscing id, ullamcorper at, consequat a,nulla."

}
]