/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { StudioService } from './studio.service';

describe('Service: Studio', () => {
  beforeEach(() => {
    addProviders([StudioService]);
  });

  it('should ...',
    inject([StudioService],
      (service: StudioService) => {
        expect(service).toBeTruthy();
      }));
});
