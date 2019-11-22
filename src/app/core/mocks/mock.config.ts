import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export default {
  GET: {
    'http://localhost:4200/technologies': {
      handler: getTechnologies,
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
