import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export default {
  GET: {
    'http://localhost:4200/technologies': {
      handler: getTechnologies,
    },
    'http://localhost:4200/images': {
      handler: getImages,
    },
  },
};

function getTechnologies() {
  return of(
    new HttpResponse({
      status: 200,
      body: [
        {
          technologyId: 1,
          technologyName: 'Android',
        },
        {
          technologyId: 2,
          technologyName: 'Ios',
        },
      ],
    }),
  );
}

function getImages() {
  return of(
    new HttpResponse({
      status: 200,
      body: ['ICO red', 'ICO black', 'ICO small', 'ICO big'],
    }),
  );
}
